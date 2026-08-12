
import { OpenLiga } from '../openligaClass.js';
import {tabellenAnzeige } from './tabellenAnzeige.js'

const ligaAuswahlFeld = document.querySelector('.liga-auswahl');
const header = document.querySelector('.ueberschrift');



const ligen = {
    "bl1": "Bundesliga",
    "bl2": "2. Bundesliga",
    "bl3": "3. Bundesliga"
}

const jahr = 2026;
let aktuelleLiga = 'bl1';


export const ligaAuswahl = (ligen, onLigaSelected) => {
    ligaAuswahlFeld.innerHTML = '';

    for (const [code, name] of Object.entries(ligen)) {
        const auswahlButton = document.createElement('button');
        auswahlButton.textContent = name;
        auswahlButton.dataset.code = code;

        auswahlButton.addEventListener('click', () => {
            onLigaSelected(code);
        });

        ligaAuswahlFeld.append(auswahlButton);
    }
};

export const ueberschrift = (aktuelleLiga) => {
    header.innerHTML = '';
    const titel = document.createElement('h2');
    titel.textContent = aktuelleLiga
    header.append(titel)

    return
}


const getDaten = async (liga) => {

    const daten = new OpenLiga();
    const aktuelleTabelle= await daten.ligaTabelle(liga, jahr)
    ueberschrift(ligen[liga]);
    tabellenAnzeige(aktuelleTabelle)

    return 
}

const main = async () => {
    await getDaten(aktuelleLiga);
}

// Liga-Auswahl NUR EINMAL initialisieren
ligaAuswahl(ligen, (selectedCode) => {
    aktuelleLiga = selectedCode;

    main();
});


main()