import { OpenLiga } from '../openligaClass.js';
import { spieltagFormat } from './spieltagFormat.js';
import { ueberschrift, spieltagAusgabe, ligaAuswahl } from './spieltagAusgabe.js'

const backButton = document.querySelector('.back');
const forwardButton = document.querySelector('.forward');

const ligen = {
    "bl1": "Bundesliga",
    "bl2": "2. Bundesliga",
    "bl3": "3. Bundesliga"
}

const jahr = 2026;
let aktuelleLiga = 'bl1';
let spieltagNummer = undefined;

const maxSpieltag = (aktuelleLiga) => aktuelleLiga === 'bl3' ? 38 : 34;

const getDaten = async (spieltagNummer, aktuelleLiga) => {
    const daten = new OpenLiga();

    let aktuellerSpieltag = spieltagNummer;
    if (!aktuellerSpieltag) {
        const spieltagId = await daten.aktuellerSpieltag(aktuelleLiga);
        aktuellerSpieltag = spieltagId.groupOrderID;
    }



    const spielDaten = await daten.spieltag(aktuelleLiga, jahr, aktuellerSpieltag);
    const spieltag = spieltagFormat(spielDaten);

    ueberschrift(ligen[aktuelleLiga], aktuellerSpieltag);
    spieltagAusgabe(spieltag);

    return aktuellerSpieltag;
}

const main = async () => {
    const neuerSpieltag = await getDaten(spieltagNummer, aktuelleLiga);
    spieltagNummer = neuerSpieltag;
}

// Liga-Auswahl NUR EINMAL initialisieren
ligaAuswahl(ligen, (selectedCode) => {
    aktuelleLiga = selectedCode;
    spieltagNummer = undefined;

    main();
});

backButton.addEventListener('click', () => {
    spieltagNummer -= 1;
    if (spieltagNummer < 1) {
        spieltagNummer = 1;
    }

    main();
});

forwardButton.addEventListener('click', () => {
    spieltagNummer += 1;
    if (spieltagNummer > maxSpieltag(aktuelleLiga)) {
        spieltagNummer = maxSpieltag(aktuelleLiga);
    }

    main();
});

main();