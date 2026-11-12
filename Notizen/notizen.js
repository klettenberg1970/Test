// Lädt Notizen von der Backend‑API und rendert sie im Grid

const API = 'https://nodeserver-995188789852.europe-west3.run.app';

/**
 * Rendert die Notizen aus der API in das Grid.
 * Zeigt während des Ladens einen Hinweis an, der nach erfolgreichem Laden
 * oder bei Fehlern wieder entfernt wird.
 */
async function renderNotizen() {
    // Ladeanzeige einblenden (bis Cold‑Start beendet ist)
    const loadingEl = document.createElement('div');
    loadingEl.id = 'loading-indicator';
    loadingEl.textContent = 'Lade Daten…';
    loadingEl.style.fontWeight = 'bold';
    loadingEl.style.margin = '1rem';

    const container = document.getElementById('notizen-container');
    if (!container) return;
    // Anzeige oberhalb des Containers einfügen
    if (container.parentNode) {
        container.parentNode.insertBefore(loadingEl, container);
    }

    try {
        const response = await fetch(`${API}/api/v1/notizen`);
        if (!response.ok) throw new Error(`Serverantwort nicht ok: ${response.status}`);
        const data = await response.json();
        const notizen = data.daten || [];

        notizen.forEach(n => {
            const card = document.createElement('div');
            card.className = 'note-card';

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = '×';
            deleteBtn.className = 'delete-btn';
            deleteBtn.title = 'Notiz löschen';
            deleteBtn.addEventListener('click', async e => {
                e.stopPropagation();
                try {
                    const resp = await fetch(`${API}/api/v1/notizen/${n._id}`, { method: 'DELETE' });
                    if (!resp.ok) throw new Error('Löschen fehlgeschlagen');
                    card.remove();
                    // Optional: Daten erneut laden, anstatt die Seite komplett zu reloaden
                    // await renderNotizen();
                } catch (err) {
                    console.error('Fehler beim Löschen der Notiz:', err);
                }
            });

            const datum = document.createElement('p');
            datum.textContent = ` ${n.datum}`;
            datum.classList.add('datum');

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

            // Komponenten zusammenbauen
            card.appendChild(datum);
            card.appendChild(deleteBtn);
            card.appendChild(title);
            card.appendChild(kategorie);
            card.appendChild(beschreibung);
            if (n.vorschlag) card.appendChild(vorschlag);
            if (n.sonstiges) card.appendChild(sonstiges);
            container.appendChild(card);
        });
    } catch (err) {
        console.error(err);
        container.textContent = 'Fehler beim Laden der Notizen.';
    } finally {
        // Ladeanzeige immer entfernen
        const loadingEl = document.getElementById('loading-indicator');
        if (loadingEl) loadingEl.remove();
    }
}

document.addEventListener('DOMContentLoaded', renderNotizen);
