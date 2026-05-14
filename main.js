import { aktualisiereUhrzeit, aktualisiereDatum } from "./Javascript/uhrzeit.js";
import { toggle } from "./JavaScript/toggle.js"

toggle()
aktualisiereUhrzeit();
setInterval(aktualisiereUhrzeit, 1000);
aktualisiereDatum();
