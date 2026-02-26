import { useState, useEffect, use } from 'react';

import Umfragentext from './umfragenText';
import Umfrageergebnisse from './umfrageergebniss';
import UmfragenAuswahl from './umfragenAuswahl';

export default function Umfragen() {
    const [umfragen, setUmfragen] = useState({});

    const handleAuswahl = async (wahl, id) => {

        try {
            const response = await fetch(`http://localhost:3000/api/umfragen/${id}`);
            const data = await response.json();
            setUmfragen(data || {});
        } catch (error) {
            console.error("Fehler beim Abrufen der Umfragen:", error);
        }

    }
    return (<div>

        <UmfragenAuswahl onAuswahl={(handleAuswahl)} />
        <Umfragentext umfragen={umfragen} />
        <Umfrageergebnisse ergebnisse={umfragen.ergebnisse} />
        {/* <pre>{JSON.stringify(umfragen, null, 2)}</pre> */}

    </div>
    )
}