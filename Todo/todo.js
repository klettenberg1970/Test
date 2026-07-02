const input = document.querySelector('#formular');

const API = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
  ? 'http://localhost:8080' 
  : 'https://nodeserver-995188789852.europe-west3.run.app';

  const toDoId = '1LotmSZ37UUnLDGcOXpKEGTwoBtJDk0C1wIqB1VayEVc';

async function laden() {
    const res = await fetch(`${API}/api/googledoc/${toDoId}`);
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
    const res = await fetch(`${API}/api/googledoc/change/${toDoId}`, {
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