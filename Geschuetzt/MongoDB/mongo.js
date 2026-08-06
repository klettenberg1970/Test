
import { Datenbank } from './mongoClass.js';

const rubrikAuswahl = document.querySelector('.rubrik-auswahl');
const anzeige = document.querySelector('.anzeige');
const rubriken = ['rss', 'links', 'kurse'];


const showDaten = async (rubrik) => {
    const daten = new Datenbank();
    const inhalt = await daten.getDaten(rubrik);
    console.log(inhalt)


    anzeige.innerHTML = ''
    for (const key of Object.values(inhalt)) {
        console.log('key:', key)
        for (const unterKey of key) {

            console.log(unterKey)
            const eintrag = document.createElement('button');
            eintrag.textContent = unterKey.name;
            anzeige.append(eintrag)

        }
    }


}

const main = () => {
    for (const item of rubriken) {
        const button = document.createElement('button');
        button.textContent = item.toUpperCase();
        rubrikAuswahl.append(button)

        button.addEventListener('click', () => {
            showDaten(item)
        })
    }

}

main()
