import { useState, useEffect, use } from 'react';

import Umfragentext from './umfragenText';
import Umfrageergebnisse from './umfrageergebniss';

export default function Umfragen () {
    const [umfragen, setUmfragen] = useState({});
    
    useEffect(() => {
        const fetchUmfragen = async () => {
            try {   
                const response = await fetch(`http://localhost:3000/api/umfragen`);
                const data = await response.json();
                setUmfragen(data || {});
            } catch (error) {
                console.error("Fehler beim Abrufen der Umfragen:", error);
            }   
        };
        fetchUmfragen();
    }, []);
   


    return (<div>

        <Umfragentext umfragen={umfragen} />
        <Umfrageergebnisse ergebnisse={umfragen.ergebnisse} />
   <pre>{JSON.stringify(umfragen, null, 2)}</pre>
    
</div>
    )
}