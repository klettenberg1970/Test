// pages/Portfolio/portfolio.jsx
import { useEffect, useState } from "react";
import PasswortAbfrage from "../../components/passwortAbfrage";

export default function Portfolio() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [portfolio, setPortfolio] = useState({});

    // Daten nur laden, wenn authentifiziert
    useEffect(() => {
        if (isAuthenticated) {
            const getPortfolio = async () => {
                const response = await fetch(`http://localhost:3000/api/portfolio`);
                const data = await response.json();
                setPortfolio(data);
            };
            getPortfolio();
        }
    }, [isAuthenticated]); // Wichtig: useEffect wird neu gestartet wenn isAuthenticated sich ändert

    // Wenn NICHT authentifiziert -> Overlay anzeigen
    if (!isAuthenticated) {
        return (
            <PasswortAbfrage 
                onAbfrage={() => setIsAuthenticated(true)} 
            />
        );
    }

    // Wenn authentifiziert -> Portfolio anzeigen
    return (
        <div style={{ 
            minHeight: 'calc(100vh - 120px)',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <h1 style={{
               
                fontSize: "2.5rem",
                marginBottom: "20px",
                textAlign: "center",
            }}>Portfolio</h1>

            {/* Portfolio-Daten anzeigen */}
            <pre>{JSON.stringify(portfolio, null, 2)}</pre>
        </div>
    );
}