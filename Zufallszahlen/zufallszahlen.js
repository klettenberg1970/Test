const formular = document.querySelector("#formular");
const ausgabe = document.querySelector('.ausgabe')
const ueberschrift = document.querySelector(".ueberschrift");
const zahlen = document.querySelector(".zahlen");
const resetButton = document.querySelector('#resetButton');

resetButton.addEventListener("click", () => {
    HTMLFormElement.prototype.reset.call(document.querySelector("#formular"));
    ueberschrift.textContent = "";
    zahlen.textContent = "";
    ausgabe.style.display = "none";  // ← ausgabe
});

const eineZahl = (startzahl, endzahl) => {
    const randomNumber = Math.floor(Math.random() * (endzahl - startzahl + 1)) + startzahl;
    return randomNumber;
}

const mehereZahlen = (anzahl, startzahl, endzahl, haeufigkeit) => {
    const zahlenArray = []

    if (haeufigkeit === "einmalig") {
        while (zahlenArray.length < anzahl) {
            const randomNumber = Math.floor(Math.random() * (endzahl - startzahl + 1)) + startzahl;
            if (!zahlenArray.includes(randomNumber)) {
                zahlenArray.push(randomNumber);
            }
        }
    } else {
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
        e.target.reset();
        return;
    }

    if (haeufigkeit === "einmalig" && (endzahl - startzahl + 1) < anzahl) {
        window.alert("Keine einmaligen Zahlen möglich: Der Zahlenraum ist zu klein für die gewünschte Anzahl!");
        e.target.reset();
        return;
    }

   if (anzahl === 1) {
    const oneRandom = eineZahl(startzahl, endzahl);
    ueberschrift.textContent = "Die Zufallszahl ist:";
    zahlen.textContent = oneRandom;
    ausgabe.style.display = "flex";
    return;
} else {
    const randomArray = mehereZahlen(anzahl, startzahl, endzahl, haeufigkeit);
    ueberschrift.textContent = "Die Zufallszahlen sind:";
    zahlen.innerHTML = randomArray.map(zahl => `<div>${zahl}</div>`).join('');
    ausgabe.style.display = "flex";
}

});