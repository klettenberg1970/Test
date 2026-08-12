import { ladeEwigeTabelle } from './ewigeTabelle.js'

const tbody = document.querySelector('.tbody')

const main = async () => {
    const tabellendaten = await ladeEwigeTabelle();
    
    const feldMapping = [
        { feld: 'platz', klasse: 'platz' },
        { feld: 'verein', klasse: 'verein' },
        { feld: 'punkte', klasse: 'punkte' },
        { feld: 'jahre', klasse: 'jahre' },
        { feld: 'spiele', klasse: 'spiele' },
        { feld: 'siege', klasse: 'siege' },
        { feld: 'unentschieden', klasse: 'unentschieden' },
        { feld: 'niederlagen', klasse: 'niederlagen' },
        { feld: 'toreFuer', klasse: 'tore-fuer' },
        { feld: 'toreGegen', klasse: 'tore-gegen' },
        { feld: 'tordifferenz', klasse: 'tordifferenz' }
    ];
    
    for (const club of tabellendaten) {
        if (club.platz && club.spiele > 0) {
            const zeile = document.createElement('tr');
            
            feldMapping.forEach(({ feld, klasse }) => {
                const zelle = document.createElement('td');
                zelle.textContent = club[feld];
                zelle.classList.add(klasse); // Klasse hinzufügen
                zeile.appendChild(zelle);
            });
            
            tbody.appendChild(zeile);
        }
    }
}

main();