import { OpenLiga } from '../openligaClass.js';

const ligaAuswahlFeld = document.querySelector('.liga-auswahl');
const header = document.querySelector('.ueberschrift');
const ausgabe = document.querySelector('.ausgabe');

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

const torschuetzenAusgabe = (spielerDaten) => {

    ausgabe.innerHTML = '';
    
    Object.values(spielerDaten).slice(0, 20).forEach((element)=>{
       
          const goalgetter = document.createElement('div');
          goalgetter.classList.add('goalgetter')

         const spieler = document.createElement('p');
         spieler.textContent=element.goalGetterName;

         
         const tore = document.createElement('p');
         tore.textContent=element.goalCount;

         const linie = document.createElement('hr')

         goalgetter.append(spieler);
         goalgetter.append(tore);
         ausgabe.append(goalgetter)
         ausgabe.append(linie)
         
 })
}

const getDaten = async (liga) => {

    const daten = new OpenLiga();
    const aktuelleListe = await daten.torschuetzen(liga, jahr)
    ueberschrift(ligen[liga]);
    torschuetzenAusgabe(aktuelleListe)

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
