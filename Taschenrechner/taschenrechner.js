const anzeige = document.getElementById("display");
const tasten = document.getElementsByClassName("Tasten");

for (const taste of tasten) {
    taste.addEventListener("click", () => {
        const wert = taste.textContent;

        if (wert === "C") {
            anzeige.value = ""; // Alles löschen
        }
        else if (wert === "E") {
            anzeige.value = anzeige.value.slice(0, -1); // Letztes Zeichen löschen
        }
        else if (wert === "=") {
            try {
                // Berechne das Ergebnis (z. B. "2+3" → 5)
                anzeige.value = eval(anzeige.value);
            } catch (e) {
                anzeige.value = "Fehler"; // Falls ungültige Eingabe
            }
        }
        else {
            anzeige.value += wert; // Standard: Wert anhängen
        }
    });
}
