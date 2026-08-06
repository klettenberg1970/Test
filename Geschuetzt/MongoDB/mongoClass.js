

export class Datenbank{

  constructor() {
    this.API = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
  ? 'http://localhost:8080' 
  : 'https://nodeserver-995188789852.europe-west3.run.app';

  }
  async getDaten(rubrik) {
    const response = await fetch(`${this.API}/api/v1/${rubrik}/getalledaten`);
    const daten = await response.json();
    return daten;
  }

}