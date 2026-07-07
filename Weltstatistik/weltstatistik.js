import {auswahl} from "./select.js";
import { showDaten } from "./showDaten.js";

const url = 'https://statisticsoftheworld.com/api/v1/countries'

const alleLaender = async () => {
    const response = await fetch(url);
    const daten = await response.json();
    return daten
}

const einzelLand = async (id) =>{
    const response = await fetch(`${url}/${id}`);
    const daten = await response.json();
    return daten
}

const laendernamen = async () => {
    const namen = await alleLaender();
    console.log(namen)
    const namenArray = [];

    for (const land of namen.data) {
        if (land.region === 'Europe & Central Asia') {
            namenArray.push(land.name)
        }
    }
    return namenArray
}

const getDaten = async(land) =>{
    console.log(`Das ausgesuchte Land ist ${land}`);
    const daten = await alleLaender();
    const gefundenesLand = daten.data.find(element => element.name === land);
    return gefundenesLand
}

const main = async () => {
    const namen = await laendernamen();
    const selectContainer = document.querySelector(".select-container");
    
    while (true) {
        // Altes Select löschen (nur das erste Select-Element im Container)
        const oldSelect = selectContainer.querySelector("select");
        if (oldSelect) {
            oldSelect.remove();
        }
        
        const selectedLand = await auswahl(namen);
        const laenderDaten = await getDaten(selectedLand);
        const id = laenderDaten.id;
        const einzelDaten = await einzelLand(id);
        showDaten(einzelDaten.indicators);
    }
}

main()