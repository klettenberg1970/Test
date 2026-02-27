import { useState, useEffect, use } from 'react';

import Umfragentext from './umfragenText';
import Umfrageergebnisse from './umfrageergebnis';
import UmfragenAuswahl from './umfragenAuswahl';

export default function Umfragen() {
    const [umfragen, setUmfragen] = useState({});


      // Bundestag (ID 0) beim ersten Laden automatisch abrufen
    useEffect(() => {
        handleAuswahl("Bundestag", 0);
    }, []); // Leeres Array = nur beim ersten Render

    const handleAuswahl = async (wahl, id) => {

        try {
            const response = await fetch(`http://localhost:3000/api/umfragen/${id}`);
            const data = await response.json();
            setUmfragen(data || {});
        } catch (error) {
            console.error("Fehler beim Abrufen der Umfragen:", error);
        }

    }
    return (
    <div style={{width:"60%",margin:"auto"}}>

        <UmfragenAuswahl onAuswahl={(handleAuswahl)} />
          <Umfrageergebnisse ergebnisse={umfragen.ergebnisse} />
        <Umfragentext umfragen={umfragen} />
      
        {/* <pre>{JSON.stringify(umfragen, null, 2)}</pre> */}

    </div>
    )
}