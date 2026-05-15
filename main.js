import { aktualisiereUhrzeit, aktualisiereDatum } from "./JavaScript/uhrzeit.js";
import { toggle } from "./JavaScript/toggle.js";
import './Webcomponents/footer.js';

toggle()
aktualisiereUhrzeit();
setInterval(aktualisiereUhrzeit, 1000);
aktualisiereDatum();
