import { useState, useEffect } from 'react';

import WetterAnzeige from './wetterAnzeige';

const CACHE_KEY = 'wetterdaten_cache';
const CACHE_DURATION_MS = 60 * 60 * 1000; // 1 Stunde in Millisekunden


export default function Wetter() {

  const [wetter, setWetter] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchWetter = async () => {
      // Cache aus localStorage lesen
      const cachedData = localStorage.getItem(CACHE_KEY);
      const cachedTime = localStorage.getItem(`${CACHE_KEY}_time`);

      // Prüfen, ob Cache existiert und noch gültig ist
      if (cachedData && cachedTime) {
        const now = new Date().getTime();
        const isCacheValid = now - parseInt(cachedTime) < CACHE_DURATION_MS;

        if (isCacheValid) {
          setWetter(JSON.parse(cachedData));
          setIsLoading(false);
          return;
        }
      }

      // Cache ist ungültig oder nicht vorhanden: Neue Daten abrufen
      try {
        const API = import.meta.env.VITE_API_URL;
        const response = await fetch(`http://localhost:3000/api/wetter`);
        const data = await response.json();

        // Cache speichern
        localStorage.setItem(CACHE_KEY, JSON.stringify(data));
        localStorage.setItem(`${CACHE_KEY}_time`, new Date().getTime().toString());

        setWetter(data || []);
      } catch (error) {
        console.error("Fehler beim Abrufen der Wetterdaten:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWetter();
  }, []);

  if (isLoading) {
    return <p>Wetterdaten werden geladen...</p>;
  }

  return (
    <div>
     
   <WetterAnzeige wetter={wetter} />
    
    </div>
  );
}
