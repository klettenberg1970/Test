
import { integrationskurse } from './kursangebote.js';


export const integrationskursAngebote = ()=>{

const container = document.querySelector('.kurs-container');

// Hilfsfunktion: erzeugt ein <p> mit Label und Wert
function erstelleZeile(label, wert) {
    const p = document.createElement('p');
    p.classList.add('kurs-zeile');
    p.innerHTML = `<span class="kurs-label">${label}:</span> ${wert}`;
    return p;
}

for (const kurs of integrationskurse) {
    const card = document.createElement('div');
    card.classList.add('kurs-card');

    // Überschrift / Kursname
    const kursname = document.createElement('h3');
    kursname.classList.add('kurs-name');
    kursname.textContent = kurs.kursname;
    card.append(kursname);

    // Kursart
    const kursart = erstelleZeile('Kursart', kurs.kursart);
    card.append(kursart);

     // Modul
    const modul = erstelleZeile('Modul', kurs.modul);
    card.append(modul);

    // Datum (Beginn)
    const datum = erstelleZeile('Datum', kurs.datum);
    card.append(datum);

    // Tage
    const tage = erstelleZeile('Tage', kurs.tage);
    card.append(tage);

    // Uhrzeit
    const uhrzeit = erstelleZeile('Uhrzeit', kurs.uhrzeit);
    card.append(uhrzeit);

    // Kursleiter
    const kursleiter = erstelleZeile('Kursleiter', kurs.kursleiter);
    card.append(kursleiter);

    // Fertige Card in den Container hängen
    container.append(card);
}
}