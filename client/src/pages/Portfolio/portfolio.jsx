import { useEffect, useState } from "react";

const passwort = false;

export default function Portfolio() {

    if (!passwort) {
    return (
        <div>
            <h1>Kein Portfolio</h1>
        </div>
    );
}
    const[portfolio, setPortfolio] = useState({})

    useEffect(() => {   
        const getPortfolio = async () => {
            const response = await fetch(`http://localhost:3000/api/portfolio`);
            const data = await response.json();
            setPortfolio(data);
        };
        getPortfolio();
    }, []);
  return (
     <div style={{ 
      minHeight: 'calc(100vh - 120px)', /* Viewport-Höhe minus Navigation und Footer */
      display: 'flex',
      flexDirection: 'column'
    }}>

        <h1 style={{
    color: "#333",
    fontSize: "2.5rem",
    marginBottom: "20px",
    textAlign: "center",
}}>Portfolio</h1>

        <pre>{JSON.stringify(portfolio, null, 2)}</pre>
    </div>
  );
}   