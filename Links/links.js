
const API = 'https://nodeserver-995188789852.europe-west3.run.app'
const linkContainer = document.querySelector(".links-container")
const linkCard = document.querySelector(".links-card")

const getLinks = async () => {
    const response = await fetch(`${API}/api/v1/links`);
    const daten = await response.json();
    return daten
    
}

const main = async () => {
    const links = await getLinks();
    console.log(links)
    
    for (const k in links){
        const kategorie = document.createElement('h2');
        kategorie.textContent = k;
        linkCard.appendChild(kategorie)
        console.log(k);
        
        // links[k] ist ein Objekt, kein Array
        for (const [linkName, linkUrl] of Object.entries(links[k])){
            console.log(linkName, linkUrl);
            // Hier kannst du die Links erstellen
            const linkElement = document.createElement('a');
            linkElement.textContent = linkName;
            linkElement.href = linkUrl;
            linkElement.target = "_blank"; // optional: in neuem Tab öffnen
            linkCard.appendChild(linkElement);
            linkCard.appendChild(document.createElement('br')); // Zeilenumbruch
        }
    }
}

main();
