 // Lädt Notizen von der Backend‑API und rendert sie im Grid
    
 const API  = 'https://nodeserver-995188789852.europe-west3.run.app';
 
 async function renderNotizen() {
        const container = document.getElementById('notizen-container');
        if (!container) return;
    
        try {
            const response = await fetch(`${API}/api/v1/notizen`);
            if (!response.ok) throw new Error(`Serverantwort nicht ok: ${response.status}`);
    
            // ----> Antwortparsing anpassen
            const data = await response.json();          // data ist ein Objekt
            const notizen = data.daten || [];            // Array aus dem Feld `daten`
            // console.log(notizen)
    
            notizen.forEach(n => {
                const card = document.createElement('div');
                card.className = 'note-card';
    
                const title = document.createElement('h2');
                title.textContent = n.titel;
    
                const datum = document.createElement('p');
                datum.textContent = `Datum: ${n.datum}`;
    
                const kategorie = document.createElement('p');
                kategorie.textContent = `Kategorie: ${n.kategorie}`;
    
                const beschreibung = document.createElement('p');
                beschreibung.textContent = n.beschreibung;
    
                const vorschlag = document.createElement('p');
                vorschlag.textContent = n.vorschlag ? `Vorschlag: ${n.vorschlag}` : '';

                 const sonstiges = document.createElement('p');
                sonstiges.textContent = n.sonstiges ? `Sonstiges: ${n.sonstiges}` : '';
    
                card.appendChild(title);
                card.appendChild(datum);
                card.appendChild(kategorie);
                card.appendChild(beschreibung);
                if (n.vorschlag) card.appendChild(vorschlag);
                container.appendChild(card);
            });
        } catch (err) {
            container.textContent = 'Fehler beim Laden der Notizen.';
            console.error(err);
        }
    }
    
    document.addEventListener('DOMContentLoaded', renderNotizen);