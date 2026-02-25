export default function Umfrageergebnisse({ergebnisse}) {
    console.log(ergebnisse);
    
    const sortierteErgebnisse = Object.values(ergebnisse || {}).sort((a, b) => {
        // "Sonstige" immer nach unten
        if (a.kurzform === "Sonstige") return 1;  // a kommt nach b
        if (b.kurzform === "Sonstige") return -1; // b kommt nach a
        
        // Ansonsten nach Prozent sortieren (absteigend)
        return b.prozent - a.prozent;
    });
    
    return(
        <div>
            {sortierteErgebnisse.map((value) => (
                <div key={value.kurzform}>
                    <p>{value.kurzform}: {value.prozent}%</p>
                </div>
            ))}
        </div>
    );
}