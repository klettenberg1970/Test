
const formular = document.querySelector("#formular");
const ausgabe = document.querySelector('.ausgabe')
const ueberschrift = document.querySelector(".ueberschrift");
const zahlen = document.querySelector(".zahlen")


const eineZahl = (startzahl, endzahl) => {
    const randomNumber = Math.floor(Math.random() * (endzahl - startzahl + 1)) + startzahl;
    return randomNumber;
}

const mehereZahlen = (anzahl, startzahl, endzahl, haeufigkeit) => {
    const zahlenArray = []

    if (haeufigkeit === "einmalig") {
        // Solange wiederholen bis genug einzigartige Zahlen gefunden wurden
        while (zahlenArray.length < anzahl) {
            const randomNumber = Math.floor(Math.random() * (endzahl - startzahl + 1)) + startzahl;

            // Nur hinzufügen, wenn die Zahl noch nicht im Array ist
            if (!zahlenArray.includes(randomNumber)) {
                zahlenArray.push(randomNumber);
            }
        }
    } else {
        // Normale Zufallszahlen mit Wiederholungen
        for (let i = 0; i < anzahl; i++) {
            const randomNumber = Math.floor(Math.random() * (endzahl - startzahl + 1)) + startzahl;
            zahlenArray.push(randomNumber);
        }
    }

    return zahlenArray;
}

formular.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const anzahl = Number(formData.get("anzahl"));
    const startzahl = Number(formData.get("startzahl"));
    const endzahl = Number(formData.get("endzahl"));
    const haeufigkeit = formData.get("haeufigkeit");

    if (startzahl >= endzahl) {
        window.alert("Falsche Zahlen: Die Startzahl muss kleiner als die Endzahl sein");
        e.target.reset(); // Formular zurücksetzen
        return; // Funktion abbrechen, nicht weiter ausführen
    }

    if (haeufigkeit === "einmalig" && (endzahl - startzahl + 1) < anzahl) {

        window.alert("Keine einmaligen Zahlen möglich: Der Zahlenraum ist zu klein für die gewünschte Anzahl!");
        e.target.reset();
        return;
    }

    if (anzahl === 1) {
        const oneRandom = eineZahl(startzahl, endzahl);
        console.log("Die Zufallszahl ist: " + oneRandom);
        ueberschrift.textContent = "Die Zufallszahl ist:"
        zahlen.textContent = oneRandom
        // e.target.reset(); 
        return
    }
    else {
        const randomArray = mehereZahlen(anzahl, startzahl, endzahl, haeufigkeit);
        ueberschrift.textContent = "Die Zufallszahlen sind:"
        zahlen.innerHTML = randomArray.join('<br>');  // <br> für Zeilenumbruch

        console.log(randomArray)
    }
}
);




