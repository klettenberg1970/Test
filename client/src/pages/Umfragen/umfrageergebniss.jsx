
import UmfrageTorte from "./umfragenTorte";

export default function Umfrageergebnisse({ ergebnisse }) {
    console.log(ergebnisse);

    const sortierteErgebnisse = Object.values(ergebnisse || {}).sort((a, b) => {
        if (a.kurzform === "Sonstige") return 1;
        if (b.kurzform === "Sonstige") return -1;
        return b.prozent - a.prozent;
    });

    // Moderne Methode mit map
    const parteien = sortierteErgebnisse.map(value => value.kurzform);
    const prozente = sortierteErgebnisse.map(value => value.prozent);


    return (
        <div style={{
            width: '50%',

            margin: '0 auto',
            marginTop: '10px',
           
        }}>
            <UmfrageTorte parteien={parteien} prozente={prozente} />
            {sortierteErgebnisse.map((value) => (
                <div key={value.kurzform}>
                    <p>{value.kurzform}: {value.prozent}%</p>
                </div>
            ))}
            
        </div>
    );
}