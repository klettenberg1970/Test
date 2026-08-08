

export class Datenbank{

  constructor() {
    this.API = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
  ? 'http://localhost:8080' 
  : 'https://nodeserver-995188789852.europe-west3.run.app';

  }

    // ✅ Bestehend: Daten abrufen
    async getDaten(rubrik) {
        const response = await fetch(`${this.API}/api/v1/${rubrik}/getalledaten`);
        const daten = await response.json();
        return daten;
    }

    // ✅ NEU: Eintrag löschen
    async deleteDaten(rubrik, id) {
        const response = await fetch(`${this.API}/api/v1/${rubrik}/delete/${id}`, {
            method: 'DELETE'
        });
        return response;
    }

    // ✅ NEU: Eintrag erstellen
    async createDaten(rubrik, data) {
        const response = await fetch(`${this.API}/api/v1/${rubrik}/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return response;
    }

}