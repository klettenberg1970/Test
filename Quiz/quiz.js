

import { showFrage } from "./showFragen.js";

const API = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
  ? 'http://localhost:8080' 
  : 'https://nodeserver-995188789852.europe-west3.run.app';

const getfrage = async () => {
    const response = await fetch(`${API}/api/quiz/`);
    const alleFragen = await response.json();
    
   console.log('📊 Anzahl der Fragen:', alleFragen.length); 
    console.log('📚 Alle Fragen:', alleFragen); 
    
    
    const zufallsFrage = alleFragen[Math.floor(Math.random() * alleFragen.length)];
    
    return zufallsFrage
}

const main = async()=>{
    const frage = await getfrage()
    console.log('🎲 Zufällige Frage:', frage);
    showFrage(frage)
}


main()