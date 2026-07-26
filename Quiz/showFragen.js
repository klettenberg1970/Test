let frageCounter = 0;
let richtigeAntworten = 0;
let falscheAntworten = 0;
let frageBeantwortet = false;

export const showFrage = (aufgabe) => {

    frageBeantwortet = false;

    // ============================================
    // QUIZ CONTAINER - Hauptcontainer
    // ============================================
    const quizContainer = document.querySelector('.quiz-container');

    // ============================================
    // QUIZ CARD - Die Karte im Container
    // ============================================
    const quizCard = document.querySelector('.quiz-card');

    // ============================================
    // KOPF - Header-Bereich
    // ============================================
    const kopf = document.querySelector('.kopf');
    const thema = document.querySelector('.thema');
    const level = document.querySelector('.level');

    // ============================================
    // FRAGEN-CONTAINER - Alle Fragen
    // ============================================
    const fragenContainer = document.querySelector('.fragen-container');
    const frage = document.querySelector('.frage');
    const optionen = document.querySelectorAll('.option');

    const fuss = document.querySelector('.fuss');

    // ============================================
    // LOESUNG - Lösungsbereich
    // ============================================
    const loesung = document.querySelector('.loesung');
    const linien = document.querySelectorAll('.loesung hr');
    const meldung = document.querySelector('.meldung');
    const antwort = document.querySelector('.antwort');
    const erklaertext = document.querySelector('.erklaertext');

    // Daten einfügen
    thema.textContent = aufgabe.thema;
    level.textContent = `Schwierigkeit: ${aufgabe.schwierigkeit}`;
    frage.textContent = aufgabe.frage;
    meldung.textContent = '';
    antwort.textContent = '';
    erklaertext.textContent = '';

    // Linien verstecken
    linien.forEach(linie => {
        linie.style.display = 'none';
    });

    // Zähler für Fragen erhöhen
    frageCounter++;
    console.log(`📊 Frage ${frageCounter}`);

    // ============================================
    // 🔥 NEU: Alte Event-Listener entfernen
    // ============================================
    // Erstelle eine Kopie der Optionen und ersetze sie durch Klone
    optionen.forEach((option, index) => {
        const neueOption = option.cloneNode(true);  // Klon ohne Event-Listener
        option.parentNode.replaceChild(neueOption, option);  // Ersetzen
    });

    // Neue Optionen holen (die frischen Klone)
    const neueOptionen = document.querySelectorAll('.option');

    // Optionen durchgehen und NEUE Listener hinzufügen
    neueOptionen.forEach((option, index) => {
        let auswahl = aufgabe.optionen[index];
        option.textContent = auswahl;

        option.addEventListener('click', function handler() {
            // Prüfen ob schon beantwortet
            if (frageBeantwortet) return;

            console.log(`Sie haben : ${auswahl} gewählt`);

            // Linien anzeigen
            linien.forEach(linie => {
                linie.style.display = 'block';
            });

            // Antwort prüfen
            if (auswahl === aufgabe.antwort) {
                richtigeAntworten += 1;
                meldung.textContent = 'Richtig !!!';
                meldung.style.color = "green";
            } else {
                falscheAntworten += 1;
                meldung.textContent = 'Falsch !!!';
                meldung.style.color = "red";
            }

            // Lösung anzeigen
            antwort.textContent = `  ${aufgabe.antwort}`;
            erklaertext.textContent = aufgabe.erklaertext;

            // Frage als beantwortet markieren
            frageBeantwortet = true;
            console.log(`Richtige Antworten bisher : ${richtigeAntworten}`);
            console.log(`Falsche Antworten bisher : ${falscheAntworten}`);
        });
    });
};