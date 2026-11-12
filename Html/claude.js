// Klick-Zähler (unverändert aus der ersten Version)
let zaehler = 0;
const knopf = document.getElementById('knopf');
const ausgabe = document.getElementById('ausgabe');

knopf.addEventListener('click', () => {
  zaehler++;
  ausgabe.textContent = `Du hast ${zaehler}-mal geklickt.`;
});

// Filter für die Karten
const filterKnoepfe = document.querySelectorAll('.filter-knopf');
const karten = document.querySelectorAll('.karte');

filterKnoepfe.forEach((filterKnopf) => {
  filterKnopf.addEventListener('click', () => {
    const auswahl = filterKnopf.dataset.filter;

    filterKnoepfe.forEach((k) => k.classList.toggle('aktiv', k === filterKnopf));

    karten.forEach((karte) => {
      karte.hidden = auswahl !== 'alle' && karte.dataset.kategorie !== auswahl;
    });
  });
});
