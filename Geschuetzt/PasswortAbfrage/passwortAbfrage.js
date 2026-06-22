
const input = document.querySelector('#formular');
const meldung = document.querySelector('.meldung');
const inputFeld = document.querySelector('input[name="abfrage"]');


const API = window.location.hostname === 'localhost' 
  ? 'http://localhost:8080' 
  : 'https://nodeserver-995188789852.europe-west3.run.app';
  console.log(API)


let errorCounter = 0;
let lockTimeout = null;

input.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const eingabe = formData.get("abfrage");

  const response = await fetch(`${API}/api/passwort`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ password: eingabe }),
  });


  const data = await response.json();


  if (data.message) {

    window.location.href = '../secretStart.html';
  } else {

    errorCounter += 1;
    meldung.textContent = `${errorCounter}. Versuch hat nicht funktioniert`;
    inputFeld.value = '';  // Leeren
    inputFeld.focus();     // Fokussieren
    if (errorCounter >= 3) {
      inputFeld.disabled = true;
      meldung.style.color = 'red';
      meldung.textContent = '🔒 Zu viele Fehlversuche! Versuchen Sie es in 30 Sekunden erneut.';

      let countdown = 30;
      lockTimeout = setInterval(() => {
        countdown--;
        meldung.textContent = `⏳ Noch ${countdown} Sekunden warten...`;

        if (countdown <= 0) {
          clearInterval(lockTimeout);
          errorCounter = 0;
          inputFeld.disabled = false;

          meldung.textContent = '🔓 Zugang freigegeben! Sie können es erneut versuchen.';
          inputFeld.focus();
        }
      }, 1000);
    }
  }



})