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
                // Button zum Löschen der Notiz hinzufügen
                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = '×';
                deleteBtn.className = 'delete-btn';
                deleteBtn.title = 'Notiz löschen';
                deleteBtn.addEventListener('click', async (e) => {
                    e.stopPropagation();
                    try {
                        const resp = await fetch(`${API}/api/v1/notizen/${n._id}`, {
                            method: 'DELETE'
                        });
                        if (!resp.ok) throw new Error('Löschen fehlgeschlagen');
                        // Entferne die Karte aus dem DOM
                        card.remove();
                        // Seite neu laden, um aktuelle Daten zu holen
                        window.location.reload();
                    } catch (err) {
                        console.error('Fehler beim Löschen der Notiz:', err);
                    }
                });
                // Button ans Card-Element anhängen


                const datum = document.createElement('p');
                datum.textContent = ` ${n.datum}`;
                datum.classList.add('datum')
    
                const title = document.createElement('h2');
                title.textContent = n.titel;
    
                const kategorie = document.createElement('p');
                kategorie.textContent = `Kategorie: ${n.kategorie}`;
    
                const beschreibung = document.createElement('p');
                beschreibung.textContent = n.beschreibung;
    
                const vorschlag = document.createElement('p');
                vorschlag.textContent = n.vorschlag ? `Vorschlag: ${n.vorschlag}` : '';

                 const sonstiges = document.createElement('p');
                sonstiges.textContent = n.sonstiges ? `Sonstiges: ${n.sonstiges}` : '';
    
                 card.appendChild(datum);
                card.appendChild(deleteBtn);
                card.appendChild(title);             
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