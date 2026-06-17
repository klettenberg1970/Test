const input = document.querySelector('#formular');

// Korrekte API-URL: erst Cloud, wenn nicht erreichbar dann lokal
const API = window.location.hostname === 'localhost' 
  ? 'http://localhost:8080' 
  : 'https://nodeserver-995188789852.europe-west3.run.app';

async function laden() {
    const res = await fetch(`${API}/api/todo`);
    const data = await res.json();
    
    // Bereinige den Text vor der Anzeige
    let saubererText = data.inhalt;
    saubererText = saubererText.replace(/^[\r\n]+/, '');  // Entferne leere Zeilen am Anfang
    saubererText = saubererText.replace(/[\r\n]+$/, '');  // Entferne leere Zeilen am Ende
    
    document.getElementById('ausgabe').textContent = saubererText;
}

input.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let eingabeText = formData.get("Text");
    
    // Bereinige die Eingabe VOR dem Speichern
    eingabeText = eingabeText.replace(/^[\r\n]+/, '');
    eingabeText = eingabeText.replace(/[\r\n]+$/, '');
    eingabeText = eingabeText.replace(/[\r\n]{3,}/g, '\n\n');
    
    // HIER: Verwende auch die API-Variable für PUT
    const res = await fetch(`${API}/api/todo/change`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: eingabeText })
    });
    
    const data = await res.json();
    console.log('Gespeichert:', data);
    
    setTimeout(() => {
        location.reload();
    }, 1000);
});

laden();