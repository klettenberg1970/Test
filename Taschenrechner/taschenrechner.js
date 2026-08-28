const anzeigenfeld = document.querySelector('.anzeige input');
const tasten = document.querySelectorAll('.tasten');

// Dein zentraler State
let aktuellerWert = '0';
let letzterWert = null;
let operation = null;
let neuerEingabestart = false;

tasten.forEach(function (taste) {
    taste.addEventListener('click', () => {
        const inhalt = taste.textContent;
        aktuellerWert = anzeigenfeld.value;

        switch (inhalt) {
            case 'C':
                aktuellerWert = '0';
                break;

            case '⌫':
                if (aktuellerWert.length > 1) {
                    aktuellerWert = aktuellerWert.slice(0, -1);
                } else {
                    aktuellerWert = '0';
                }
                break;

            case '+/-':
                if (aktuellerWert.startsWith('-')) {
                    aktuellerWert = aktuellerWert.slice(1);
                } else {
                    if (aktuellerWert !== '0') {
                        aktuellerWert = '-' + aktuellerWert;
                    }
                }
                break;

            case '+':
            case '-':
            case '*':
            case '/':
                letzterWert = parseFloat(aktuellerWert);
                operation = inhalt;
                neuerEingabestart = true;
                break;

            case '%':
                // Den aktuellen Display-Wert in eine Zahl umwandeln, durch 100 teilen und wieder zum String machen
                aktuellerWert = (parseFloat(aktuellerWert) / 100).toString();
                break;

            case '=':
                if (operation !== null && letzterWert !== null) {
                    aktuellerWert = parseFloat(aktuellerWert);

                    if (operation === '+') {
                        aktuellerWert = letzterWert + aktuellerWert;
                    } else if (operation === '-') {
                        aktuellerWert = letzterWert - aktuellerWert;
                    } else if (operation === '*') {
                        aktuellerWert = letzterWert * aktuellerWert;
                    } else if (operation === '/') {
                        // Kleine Extra-Sicherung: Division durch 0 abfangen
                        if (aktuellerWert === 0) {
                            aktuellerWert = "Fehler";
                        } else {
                            aktuellerWert = letzterWert / aktuellerWert;
                        }
                    }

                    // Ergebnis wieder zum String machen fürs Display
                    aktuellerWert = aktuellerWert.toString();

                    // State nach dem Berechnen wieder aufräumen
                    operation = null;
                    letzterWert = null;
                }
                break;


            default:
                if (neuerEingabestart) {
                    aktuellerWert = inhalt;
                    neuerEingabestart = false;
                } else {
                    if (aktuellerWert === '0') {
                        aktuellerWert = inhalt;
                    } else {
                        aktuellerWert += inhalt;
                    }
                }
                break;
        }

        // Das Display wird hier einmalig am Ende des Klicks aktualisiert
        anzeigenfeld.value = aktuellerWert;
    });
});