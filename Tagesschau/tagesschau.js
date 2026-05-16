

const ressorts = ["Inland", "Ausland", "Wirtschaft", "Sport", "Investigativ", "Wissen"]


const news = document.querySelector(".news")

export async function getNews(ressort) {
    const url = `https://www.tagesschau.de/api2u/news/?regions=1&ressort=${ressort}`;

    const response = await fetch(url);
    const daten = await response.json();

    return daten.news
}

const main = async () => {
    const nachrichten = await getNews("Inland");
    for (const item of nachrichten) {
        // Titel (h3)
        const titel = document.createElement('h3');
        titel.innerText = item.title;
        news.appendChild(titel);
        
        // Erster Satz (p)
        const ersterSatz = document.createElement('p');
        ersterSatz.innerText = item.firstSentence;
        news.appendChild(ersterSatz);
        
        // Link (a)
        const link = document.createElement('a');
        link.innerText = "Zum Artikel";
        link.href = item.detailsweb;
        link.target = "_blank"; // öffnet in neuem Tab
        news.appendChild(link);
        
        // Datum (p)
        const datum = document.createElement('p');
        datum.innerText = item.date;
        news.appendChild(datum);
        
        // Bild (img)
        const bild = document.createElement('img');
        bild.src = item.teaserImage.imageVariants["16x9-960"];
        bild.alt = item.title; // Barrierefreiheit
        news.appendChild(bild);
        
        // Optional: Trenner zwischen den News
        const trenner = document.createElement('hr');
        news.appendChild(trenner);
        
        // Console logs (zum Debuggen)
        console.log(item);
        console.log(item.firstSentence);
        console.log(item.detailsweb);
        console.log(item.date);
        console.log(item.teaserImage.imageVariants["16x9-960"]);
    }
}


main()