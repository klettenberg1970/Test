
// Funktion außerhalb der Schleife (z.B. vor zeigeNachrichten)
export function formatiereDatumMitUhrzeit(datumString) {
    if (!datumString) return "";
    
    const d = new Date(datumString);
    if (isNaN(d)) return "";
    
    const tag = d.getDate().toString().padStart(2, '0');
    const monat = (d.getMonth() + 1).toString().padStart(2, '0');
    const jahr = d.getFullYear();
    const stunden = d.getHours().toString().padStart(2, '0');
    const minuten = d.getMinutes().toString().padStart(2, '0');
    
    return `${tag}.${monat}.${jahr} - ${stunden}:${minuten} `;
}