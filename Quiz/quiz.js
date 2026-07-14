import { showFrage } from "./showFragen.js";

const API = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
    ? 'http://localhost:8080'
    : 'https://nodeserver-995188789852.europe-west3.run.app';

console.log(API)

let alleFragen = [];


const ladeAlleFragen = async () => {
    const response = await fetch(`${API}/api/quiz/`);
    alleFragen = await response.json();
    console.log('📊 Anzahl der Fragen:', alleFragen.length);
    console.log('📚 Alle Fragen:', alleFragen);
};


const zeigeNeueFrage = () => {
   
    const zufallsIndex = Math.floor(Math.random() * alleFragen.length);
    const frage = alleFragen[zufallsIndex];
    console.log('🎲 Zufällige Frage:', frage);
    showFrage(frage);
};



const main = async () => {
    const ladeAnzeige = document.querySelector('.lade-anzeige'); 
    const quizContainer = document.querySelector('.quiz-container');
    
    ladeAnzeige.style.display = 'block';
    quizContainer.style.display = 'none';

    await ladeAlleFragen();

    ladeAnzeige.style.display = 'none';
    quizContainer.style.display = 'block';

    zeigeNeueFrage();

    const weiterButton = document.querySelector('.weiter');
    weiterButton.addEventListener('click', zeigeNeueFrage);
};

main();

