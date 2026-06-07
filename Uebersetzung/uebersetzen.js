import { sprachen } from './sprachen.js';
import { uebersetzen } from './translation.js';

const auswahl = document.querySelector('.auswahl');
const eingabeFeld = document.querySelector('.eingabe');
const input = document.querySelector('#formular');
const ausgabeFeld = document.querySelector('.ausgabe');
const output = document.querySelector('#output');
const reset = document.querySelector('#resetButton');

// Sprachauswahl

// Eingabe und Ausgabe

input.addEventListener('submit', async (e) => {

    e.preventDefault();
    const formData = new FormData(e.target);
    const eingabeText = formData.get("eingabeText");
   
    const ausgabeText = await uebersetzen('de', 'en', eingabeText);
  
    output.textContent = ausgabeText;
    reset.addEventListener('click', () => {
        e.target.reset();
        output.textContent = '';
    })

})




