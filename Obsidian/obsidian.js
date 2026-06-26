const ordnerContainer = document.querySelector('.ordner-container')
const obsidianID = '1yDIjIArVucBW_f_MRiVu3C1aEUq71_Sr'

const API = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
    ? 'http://localhost:8080'
    : 'https://nodeserver-995188789852.europe-west3.run.app';

    console.log(API)

const getOrdner = async (id) => {
    const response = await fetch(`${API}/api/obsidian/ordner/${id}`);
    const data = await response.json();
    return data
}

const getDateien = async (id) => {
    const response = await fetch(`${API}/api/obsidian/dateien/${id}`);
    const data = await response.json();

    return data
}


const createButtons = async (folderData) => {
    const ordnerListe = folderData.ordner || [folderData];
    
    for (const ordner of ordnerListe) {
        if (ordner.name !== ".obsidian") {
            const ordnerButton = document.createElement("button");
            ordnerButton.textContent = ordner.name;
            ordnerContainer.appendChild(ordnerButton);

            ordnerButton.addEventListener('click', async () => {
                console.log(`Name: ${ordner.name}`);
                console.log(`ID: ${ordner.id}`);
                
                // Hole ALLE Inhalte (Dateien UND Ordner)
                const dateien = await getDateien(ordner.id);
                console.log('Alle Inhalte:', dateien);
                
                for (const datei of dateien.mdDateien) {
                    if (datei.mimeType === 'application/vnd.google-apps.folder') {
                        // Es ist ein Unterordner - hol die Unterordner-Struktur
                        console.log(`Unterordner gefunden: ${datei.name}`);
                        const unterOrdner = await getOrdner(datei.id);
                        console.log('Unterordner-Struktur:', unterOrdner);
                        
                        // Rekursiv die Unterordner durchgehen
                        await createButtons(unterOrdner);
                    } else {
                        // Es ist eine Datei (z.B. Markdown)
                        console.log(`Datei gefunden: ${datei.name} (${datei.mimeType})`);
                        // Hier könntest du einen Button für die Datei erstellen
                    }
                }
            });
        }
    }
};



const main = async ()=> {
    const obsidianFolder = await getOrdner(obsidianID);
    console.log(obsidianFolder.ordner)
    createButtons(obsidianFolder)
}

main();