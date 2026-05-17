
import {formatiereDatumMitUhrzeit} from "./datum.js";

const ressorts = ["Inland", "Ausland", "Wirtschaft", "Sport", "Investigativ", "Wissen"];
const news = document.querySelector(".news");
const selectContainer = document.querySelector(".select-container");

export async function getNews(ressort) {
    const url = `https://www.tagesschau.de/api2u/news/?regions=1&ressort=${ressort}`;
    const response = await fetch(url);
    const daten = await response.json();
    return daten.news;
}

async function zeigeNachrichten(ressort) {
    news.innerHTML = "";
    
    const nachrichten = await getNews(ressort);
    
    for (const item of nachrichten) {
        // CARD-CONTAINER - Das ist das Wichtige!
        const card = document.createElement('div');
        card.className = 'news-card'; // Klasse für CSS

        const datum = document.createElement('p');
        datum.innerText = formatiereDatumMitUhrzeit(item?.date);
        card.appendChild(datum);
        
        // Alle Inhalte in die card einfügen (nicht direkt in news)
        const titel = document.createElement('h3');
        titel.innerText = item?.title || "";
        card.appendChild(titel);

        const ersterSatz = document.createElement('p');
        ersterSatz.innerText = item?.firstSentence || "";
        card.appendChild(ersterSatz);

       

        const bild = document.createElement('img');
        bild.src = item?.teaserImage?.imageVariants?.["16x9-256"] || "";
        bild.alt = item?.title || "";
        card.appendChild(bild);

         const link = document.createElement('a');
        link.innerText = item?.detailsweb ? "Zum Artikel" : "";
        link.href = item?.detailsweb || "";
        link.target = "_blank";
        card.appendChild(link);



        // Card in den News-Container einfügen
        news.appendChild(card);
        
        
    }
}

const auswahl = () => {
    const select = document.createElement("select");

    // Platzhalter-Option als ersten Eintrag
    const placeholderOption = document.createElement("option");
    placeholderOption.value = "";
    placeholderOption.innerText = "--- Bitte wählen ---";
    placeholderOption.disabled = true; // Nicht auswählbar
    placeholderOption.selected = true; // Standardmäßig ausgewählt
    select.appendChild(placeholderOption);

    // Die eigentlichen Ressorts
    for (const option of ressorts) {
        const optionElement = document.createElement("option");
        optionElement.value = option;
        optionElement.innerText = option;
        select.appendChild(optionElement);
    }
    selectContainer.appendChild(select);

    // Event-Listener: Wenn Auswahl ändert, zeige neue Nachrichten
    select.addEventListener("change", async (event) => {
        const selectedRessort = event.target.value;
        if (selectedRessort) { // Nur laden, wenn kein Platzhalter
            await zeigeNachrichten(selectedRessort);
        }
    });
}

// Starte die App
auswahl();