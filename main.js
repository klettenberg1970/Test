import {aktualisiereUhrzeit, aktualisiereDatum}from "./JavaScript/uhrzeit.js"

// Aktualisiere die Uhrzeit sofort und dann jede Sekunde
        aktualisiereUhrzeit();
        setInterval(aktualisiereUhrzeit, 1000);

        // Aktualisiere das Datum sofort
        aktualisiereDatum();
  