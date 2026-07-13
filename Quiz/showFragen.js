

export const showFrage = (aufgabe) => {
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
    thema.textContent = aufgabe.thema
    const level = document.querySelector('.level');
    level.textContent = `Schwierigkeit: ${aufgabe.schwierigkeit}`
    // ============================================
    // FRAGEN-CONTAINER - Alle Fragen
    // ============================================
    const fragenContainer = document.querySelector('.fragen-container');

    const frage = document.querySelector('.frage')
    frage.textContent = aufgabe.frage
    const optionen = document.querySelectorAll('.option'); // Alle Fragen (NodeList)

    // Einzelne Fragen (falls du sie separat brauchst)
    const option1 = optionen[0];  // oder document.querySelectorAll('.option')[0]
    const option2 = optionen[1];
    const option3 = optionen[2];
    const option4 = optionen[3];




    // ============================================
    // FUSS - Footer-Bereich
    // ============================================
    const fuss = document.querySelector('.fuss');

    // ============================================
    // LOESUNG - Lösungsbereich
    // ============================================
    const loesung = document.querySelector('.loesung');
    const linien = document.querySelectorAll('.loesung hr')
    const meldung = document.querySelector('.meldung');
    const antwort = document.querySelector('.antwort');
    const erklaertext = document.querySelector('.erklaertext');


    meldung.textContent = '';
    antwort.textContent = ``;
    erklaertext.textContent = '';

    linien.forEach(linie => {
        linie.style.display = 'none';
    });


    optionen.forEach((option, index) => {

        let auswahl = aufgabe.optionen[index];

        option.textContent = auswahl

        option.addEventListener('click', () => {
            console.log(`Sie haben : ${auswahl} gewählt`)

            linien.forEach(linie => {
                linie.style.display = 'block';
            });

            if (auswahl === aufgabe.antwort) {
                console.log('Richtig');
                meldung.textContent = 'Richtig !!!';
                meldung.style.color = "green";

            } else {
                console.log('Falsch');
                meldung.textContent = 'Falsch !!!';
                meldung.style.color = "red";

            }
            antwort.textContent = `  ${aufgabe.antwort}`;
            erklaertext.textContent = aufgabe.erklaertext


        })
    });


}