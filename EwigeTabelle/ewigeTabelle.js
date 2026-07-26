/**
 * Ewige Tabelle der Fußball-Bundesliga – Extraktion via Wikipedia-API
 *
 * Ansatz: Statt den rohen Wikitext (verschachtelte {{Vorlagen}}) zu parsen,
 * holen wir das von Wikipedia bereits gerenderte HTML (prop=text) und lesen
 * die Tabelle über einen generischen DOM-Grid-Resolver aus, der rowspan/colspan
 * korrekt auflöst. Das ist deutlich robuster als Regex auf Wikitext-Ebene:
 *  - Logos/Bilder in Zellen werden automatisch ignoriert (textContent)
 *  - Spalten werden über die echten Header-Namen gemappt, nicht über feste Indizes
 *  - rowspan/colspan werden strukturell aufgelöst statt erraten
 *
 * Hinweis CORS: Im Browser braucht der API-Call den Parameter `origin=*`.
 */

const WIKI_API =
  "https://de.wikipedia.org/w/api.php" +
  "?action=parse" +
  "&page=" + encodeURIComponent("Ewige_Tabelle_der_Fußball-Bundesliga") +
  "&prop=text" +
  "&format=json" +
  "&formatversion=2" +
  "&origin=*";

/**
 * Löst eine HTML-<table> in ein 2D-Grid auf und berücksichtigt dabei
 * rowspan und colspan korrekt (Standardalgorithmus mit "belegte Zellen"-Map).
 */
function tabelleZuGrid(table) {
  const rows = Array.from(table.rows);
  const grid = [];
  const belegt = {}; // Key "zeile,spalte" -> Wert, für Zellen die durch rowspan "von oben" belegt sind

  rows.forEach((tr, r) => {
    const zeile = [];
    let c = 0;
    const cells = Array.from(tr.cells);
    let cellIdx = 0;

    while (cellIdx < cells.length || belegt[`${r},${c}`] !== undefined) {
      if (belegt[`${r},${c}`] !== undefined) {
        zeile[c] = belegt[`${r},${c}`];
        c++;
        continue;
      }

      const cell = cells[cellIdx];
      if (!cell) break;

      const text = cell.textContent.trim();
      const colspan = parseInt(cell.getAttribute("colspan") || "1", 10);
      const rowspan = parseInt(cell.getAttribute("rowspan") || "1", 10);

      for (let dc = 0; dc < colspan; dc++) {
        zeile[c] = text;
        for (let dr = 1; dr < rowspan; dr++) {
          belegt[`${r + dr},${c}`] = text;
        }
        c++;
      }
      cellIdx++;
    }

    grid.push(zeile);
  });

  return grid;
}

/** Entfernt Fußnoten-Referenzen wie "[1]" und normalisiert Whitespace und Strich-Varianten. */
function normalisiereText(text) {
  if (text === undefined || text === null) return "";
  return text
    .replace(/\[\d+\]/g, "")
    .replace(/[\u2010\u2011\u2012\u2013\u2014\u2212]/g, "-") // diverse Gedankenstrich-/Minus-Varianten -> normaler Bindestrich
    .replace(/\s+/g, " ")
    .trim();
}

/** Parst eine Ganzzahl im deutschen Format (Punkt = Tausendertrenner, „–“/„-“ = leer). */
function parseZahl(text) {
  const bereinigt = normalisiereText(text)
    .replace(/\./g, "")       // Tausendertrenner entfernen
    .replace(/[−–]/g, "-");   // Unicode-Minus/Gedankenstrich -> normales Minus

  if (bereinigt === "" || bereinigt === "-") return null;

  const zahl = parseInt(bereinigt, 10);
  return Number.isNaN(zahl) ? null : zahl;
}

/** Parst eine Kommazahl (z.B. „1,85“) als Float. */
function parseKommaZahl(text) {
  const bereinigt = normalisiereText(text)
    .replace(",", ".")
    .replace(/[−–]/g, "-");

  if (bereinigt === "" || bereinigt === "-") return null;

  const zahl = parseFloat(bereinigt);
  return Number.isNaN(zahl) ? null : zahl;
}

/**
 * Findet unter allen "wikitable"-Tabellen der Seite diejenige, die die
 * Ewige Tabelle enthält (erkennbar an Kopfzeile mit "Verein" und "Sp.").
 */
function findeEwigeTabelle(doc) {
  const kandidaten = Array.from(doc.querySelectorAll("table.wikitable"));

  for (const table of kandidaten) {
    const grid = tabelleZuGrid(table);
    if (grid.length === 0) continue;

    const header = grid[0].map(normalisiereText);
    const hatVerein = header.some((h) => h === "Verein");
    const hatSpiele = header.some((h) => h === "Sp.");

    if (hatVerein && hatSpiele) {
      return { table, grid, header };
    }
  }

  return null;
}

/** Baut aus Header-Zeile eine Map: Spaltenname -> Index (erstes Vorkommen). */
function baueSpaltenIndex(header) {
  const index = {};
  header.forEach((name, i) => {
    if (!(name in index)) index[name] = i;
  });
  return index;
}

async function ladeEwigeTabelle() {
  const response = await fetch(WIKI_API);
  if (!response.ok) {
    throw new Error(`Wikipedia-API antwortete mit Status ${response.status}`);
  }

  const data = await response.json();
  const html = data.parse.text;

  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  const gefunden = findeEwigeTabelle(doc);
  if (!gefunden) {
    throw new Error(
      "Ewige-Tabelle nicht gefunden. Wikipedia hat evtl. die Struktur geändert - " +
        "bitte prüfe die verfügbaren table.wikitable-Elemente auf der Seite."
    );
  }

  const { grid, header } = gefunden;
  const idx = baueSpaltenIndex(header);

  const ergebnis = [];

  for (let i = 1; i < grid.length; i++) {
    const zeile = grid[i];
    const vereinRoh = zeile[idx["Verein"]];
    const verein = normalisiereText(vereinRoh);

    // Zeilen ohne echten Vereinsnamen überspringen (z.B. Legenden-/Restzeilen)
    if (!verein || verein.length < 2) continue;

    ergebnis.push({
      platz: parseZahl(zeile[idx["Pl."]]),
      verein,
      jahre: normalisiereText(zeile[idx["Jahre"]]),
      spiele: parseZahl(zeile[idx["Sp."]]),
      siege: parseZahl(zeile[idx["S"]]),
      unentschieden: parseZahl(zeile[idx["U"]]),
      niederlagen: parseZahl(zeile[idx["N"]]),
      toreFuer: parseZahl(zeile[idx["T+"]]),
      toreGegen: parseZahl(zeile[idx["T-"]]),
      tordifferenz: parseZahl(zeile[idx["Diff."]]),
      punkte: parseZahl(zeile[idx["Punkte"]]),
      punkteSchnitt: parseKommaZahl(zeile[idx["Ø-Pkt."]]),
    });
  }

  return ergebnis;
}

export { ladeEwigeTabelle };