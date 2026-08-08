
import { Datenbank } from './mongoClass.js';

const rubrikAuswahl = document.querySelector('.rubrik-auswahl');
const anzeige = document.querySelector('.anzeige');
const card = document.querySelector('.card');
const rubriken = ['rss', 'links', 'kurse'];

const neuerEintrag = (rubrik, keys) => {
    console.log('Rubrik:', rubrik);
    console.log('Felder für das Formular:', keys);
    
    const container = document.createElement('div');
    container.className = 'new-entry-form';
    
    const inputs = {};  // Inputs speichern für später
    
    keys.forEach(key => {
        const input = document.createElement('input');
        input.placeholder = key;
        input.name = key;
        container.append(input);
        inputs[key] = input;  // Input speichern
    });
    
    const createbutton = document.createElement('button');
    createbutton.textContent = 'Speichern';
    container.append(createbutton);
    
    // ✅ 'click' Event für den Button
    createbutton.addEventListener('click', async () => {
        // Daten aus den Inputs sammeln
        const newData = {};
        keys.forEach(key => {
            newData[key] = inputs[key].value;
        });
        
        console.log('Neue Daten:', newData);
        console.log('Rubrik:', rubrik);
        const daten = new Datenbank();
       await daten.createDaten(rubrik,newData)
        await showDaten(rubrik);  
    });
    
    return container;
}


const showDaten = async (rubrik) => {
    const daten = new Datenbank();
    const inhalt = await daten.getDaten(rubrik);
    const altesFormular = document.querySelector('.new-entry-form');
    if (altesFormular) altesFormular.remove();

    anzeige.innerHTML = '';

    // Keys aus dem ersten Eintrag holen
    let alleKeys = [];
    const ersterEintrag = Object.values(inhalt)[0]?.[0];
    if (ersterEintrag) {
        alleKeys = Object.keys(ersterEintrag).filter(key => key !== '_id');
    }

    for (const key of Object.values(inhalt)) {
        for (const unterkey of key) {
            const card = document.createElement('div');
            card.className = 'card';

            const deletebutton = document.createElement('button');
            deletebutton.textContent = 'X';
            deletebutton.className = 'deletebutton';
            card.append(deletebutton);

            deletebutton.addEventListener('click',async () => {
                console.log(`Eintrag "${unterkey.name}" mit der ID ${unterkey._id} wird gelöscht`);
                await daten.deleteDaten(rubrik,unterkey._id)
                await showDaten(rubrik);  
            });

            for (const schluessel in unterkey) {
                if (schluessel !== '_id') {
                    let wert = unterkey[schluessel];
                    let eintrag = document.createElement('p');
                    eintrag.textContent = `${schluessel}: ${wert}`;
                    card.append(eintrag);
                }
            }

            anzeige.append(card);
        }
    }

    const form = neuerEintrag(rubrik, alleKeys);
    anzeige.after(form);
}


const main = () => {
    for (const item of rubriken) {
        const button = document.createElement('button');
        button.textContent = item.toUpperCase();

        rubrikAuswahl.append(button)

        button.addEventListener('click', () => {
  
            showDaten(item);

        })
    }

}

main()
