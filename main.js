import { aktualisiereUhrzeit, aktualisiereDatum } from "./JavaScript/uhrzeit.js";
import './Webcomponents/footer.js';

// Dark-Mode-Toggle
const toggleBtn = document.querySelector('#toggle');

const applyMode = (dark) => {
  document.body.classList.toggle('dark-mode', dark);
  toggleBtn.textContent = dark ? '☀️ Hell' : '🌙 Dunkel';
};

// Gespeicherten Modus laden
const savedDark = localStorage.getItem('darkMode') === 'true';
applyMode(savedDark);

toggleBtn.addEventListener('click', () => {
  const isDark = document.body.classList.contains('dark-mode');
  applyMode(!isDark);
  localStorage.setItem('darkMode', String(!isDark));
});

// Uhrzeit & Datum
aktualisiereUhrzeit();
setInterval(aktualisiereUhrzeit, 1000);
aktualisiereDatum();
