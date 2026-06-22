import { OpenLiga } from "./openligaClass.js";


// Verwendung:
const main = async () => {
  const openLiga = new OpenLiga();  // Instanz erstellen
  const tabelle = await openLiga.bundesligaTabelle("bl2",2025);
  const goalgetter = await openLiga.torschuetzen("bl1",2025);
  console.log(tabelle)
};

main();