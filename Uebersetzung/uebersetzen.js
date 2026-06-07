import { sprachen } from './sprachen.js';
import { uebersetzen } from './translation.js';


const language = document.querySelector('#language');


const input = document.querySelector('#formular');

const output = document.querySelector('#output');
const reset = document.querySelector('#resetButton');

const sprachAuswahl = ["Englisch", "Französisch", "Spanisch", "Italienisch", "Niederländisch"];

// Sprachauswahl
const sprachOptionen = (container) => {
  const select = document.createElement("select");

  const placeholderOption = document.createElement("option");
  placeholderOption.value = "Deutsch";
  placeholderOption.textContent = "Deutsch";
  placeholderOption.selected = true;
  select.appendChild(placeholderOption);

  for (const option of sprachAuswahl) {
    const optionElement = document.createElement("option");
    optionElement.value = option;
    optionElement.textContent = option;
    select.appendChild(optionElement);
  }

  container.appendChild(select);
  return select; // select-Element zurückgeben
};

// Eingabe und Ausgabe
const main = async () => {
  const containers = document.querySelectorAll(".select-container");
  const asSelect = sprachOptionen(containers[0]); // Ausgangssprache
  const zsSelect = sprachOptionen(containers[1]); // Zielsprache

  input.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const eingabeText = formData.get("eingabeText");

    const ausgangsSprache = sprachen[asSelect.value]; // aktueller Wert beim Submit
    const zielSprache = sprachen[zsSelect.value];

    const ausgabeText = await uebersetzen(ausgangsSprache, zielSprache, eingabeText);

    output.textContent = ausgabeText;

    reset.addEventListener('click', () => {
      e.target.reset();
      output.textContent = '';
    });
  });
};

main();