// DOM-Elemente
const anzeige = document.querySelector(".counter-anzeige");
const weiterButton = document.querySelector(".increment");
const zurueckButton = document.querySelector(".decrement");
const resetButton = document.querySelector(".reset");

// State aus localStorage laden
let counterValue = parseInt(localStorage.getItem("counter")) || 0;

// UI aktualisieren
const updateDisplay = () => {
    anzeige.textContent = counterValue;
    console.log(`Der Counter ist ${counterValue}`);
}

// In localStorage speichern und UI aktualisieren
const setCounter = () => {
    localStorage.setItem("counter", String(counterValue));
    updateDisplay();
}

// Event-Listener
weiterButton.addEventListener('click', () => {
    counterValue += 1;
    setCounter();
});

zurueckButton.addEventListener('click', () => {
    counterValue -= 1;
    setCounter();
});

resetButton.addEventListener('click', () => {
    counterValue = 0;
    setCounter();
});

// Initial anzeigen
setCounter();