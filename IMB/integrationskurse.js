import { integrationskurse } from './kursangebote.js';

export const integrationskursAngebote = () => {

    const container = document.getElementById('kurs-container');

    // Hilfsfunktion: erzeugt ein <p> mit Label und Wert
    function erstelleZeile(label, wert) {
        const p = document.createElement('p');
        p.classList.add('kurs-zeile');
        p.innerHTML = `<span class="kurs-label">${label}</span> ${wert}`;
        return p;
    }

    for (const kurs of integrationskurse) {
        const card = document.createElement('div');
        card.classList.add('kurs-card');

        // Alphakurs bekommt eine extra CSS-Klasse für anderen Farbakzent
        if (kurs.kursart === 'Alphabetisierungskurs') {
            card.classList.add('alphakurs');
        }

        // Kursname / Nummer
        const kursname = document.createElement('h3');
        kursname.classList.add('kurs-name');
        kursname.textContent = `Kurs ${kurs.kursname}`;
        card.append(kursname);

        // Kursart-Badge
        const badge = document.createElement('span');
        badge.classList.add('kurs-art-badge');
        badge.textContent = kurs.kursart;
        card.append(badge);

        // Modul
        card.append(erstelleZeile('📘 Modul:', kurs.modul));

        // Datum (Beginn)
        card.append(erstelleZeile('📅 Start:', kurs.datum));

        // Tage
        card.append(erstelleZeile('🗓 Tage:', kurs.tage));

        // Uhrzeit
        card.append(erstelleZeile('🕗 Uhrzeit:', kurs.uhrzeit));

        // Kursleiter
        card.append(erstelleZeile('👩‍🏫 Leitung:', kurs.kursleiter));

        container.append(card);
    }
};
