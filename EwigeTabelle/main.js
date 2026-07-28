import { ladeEwigeTabelle } from './ewigeTabelle.js'

const tbody = document.querySelector('.tbody')
console.log(tbody)


const main = async () => {
    const tabellendaten = await ladeEwigeTabelle();
    
    for (const club of tabellendaten) {
        if (club.platz && club.spiele>0) {
            
            const zeile = document.createElement('tr')
            const platz = document.createElement('td')
            const verein = document.createElement('td')
            const punkte = document.createElement('td')
            const jahre = document.createElement('td')
            const spiele = document.createElement('td')
            const siege = document.createElement('td')
            const unentschieden = document.createElement('td')
            const niederlagen = document.createElement('td')
            const torePlus = document.createElement('td')
            const toreminus = document.createElement('td')
            const tordifferenz = document.createElement('td')

            platz.textContent= club.platz;
            verein.textContent = club.verein;
            punkte.textContent = club.punkte;
            jahre.textContent =club.jahre;
            spiele.textContent = club.spiele;
            siege.textContent = club.siege;
            unentschieden.textContent = club.unentschieden;
            niederlagen.textContent = club.niederlagen;
            torePlus.textContent = club.toreFuer;
            toreminus.textContent = club.toreGegen;
            tordifferenz.textContent = club.tordifferenz;

            zeile.appendChild(platz)
            zeile.appendChild(verein)
            zeile.appendChild(punkte)
            zeile.appendChild(jahre)
            zeile.appendChild(spiele)
            zeile.appendChild(siege)
            zeile.appendChild(unentschieden)
            zeile.appendChild(niederlagen)
            zeile.appendChild(torePlus)
            zeile.appendChild(toreminus)
            zeile.appendChild(tordifferenz)

            tbody.appendChild(zeile)

        }

    }

}

main()