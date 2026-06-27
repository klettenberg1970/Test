const ordnerContainer = document.querySelector('.ordner-container');
const mdDiv = document.querySelector('.mdDatei');
const unterordnerDiv = document.querySelector('.unterordner');
const mdContentDiv = document.querySelector('#mdContent');

const obsidianID = '1yDIjIArVucBW_f_MRiVu3C1aEUq71_Sr';

const API = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
    ? 'http://localhost:8080'
    : 'https://nodeserver-995188789852.europe-west3.run.app';



const getalleDateien = async (id) => {
    const response = await fetch(`${API}/api/obsidian/komplett/${id}`);
    const data = await response.json();
    return data;
};

const getDateien = async (id) => {
    const response = await fetch(`${API}/api/obsidian/dateien/${id}`);
    const data = await response.json();
    return data;
};

const getDateibyId = async (id) => {
    const response = await fetch(`${API}/api/obsidian/datei/${id}`);
    const data = await response.json();

    return data;
}


const unterordner = async (datei) => {
    console.log('Unterordner:', datei);
    const unterordnerButton = document.createElement("button");
    unterordnerButton.textContent = ` ${datei.name}`;
    unterordnerDiv.appendChild(unterordnerButton)

    unterordnerButton.addEventListener('click', async () => {

        const alleDateien = await getDateien(datei.id)
        for (const md of alleDateien.mdDateien) {
            await showMD(md)
        }

    })

}

const showMD = async (datei) => {

    console.clear();
    console.log('Dateiname:', datei)
    mdContentDiv.value = "";

    const dateiButton = document.createElement("button");
    dateiButton.textContent = ` ${datei.name}`;
    mdDiv.appendChild(dateiButton)
    dateiButton.addEventListener('click', async () => {
        const singleMd = await getDateibyId(datei.id);
        const inhalt = singleMd.singleDatei;
        console.log(inhalt)
        mdContentDiv.value = inhalt;
        mdContentDiv.style.display = 'block';
    })
}

const createButtons = async (folder) => {
    const ordnerListe = folder.ordner;

    for (const ordner of ordnerListe) {
        if (ordner.name !== ".obsidian") {

            const ordnerButton = document.createElement("button");
            ordnerButton.textContent = ` ${ordner.name}`;
            ordnerContainer.appendChild(ordnerButton);


            ordnerButton.addEventListener('click', async () => {
                const alleDateien = await getDateien(ordner.id);
                mdDiv.innerHTML = '';
                unterordnerDiv.innerHTML = '';


                for (const datei of alleDateien.mdDateien) {
                    if (datei.mimeType === 'application/vnd.google-apps.folder') {
                        await unterordner(datei)

                    } else {
                        await showMD(datei)
                    }

                }
            })
        }
    }
}


const main = async () => {
    console.log(`Aktueller Zugriff über: ${API}`);
    const obsidianFolder = await getalleDateien(obsidianID);
    await createButtons(obsidianFolder)
    console.log('Hauptordner:', obsidianFolder);
}


main()