// components/PasswordOverlay.jsx
import { useState } from "react";

export default function PasswortAbfrage({ onAbfrage }) {
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

          const response = await fetch(`http://localhost:3000/api/passwort`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ password }),
  });
  const data = await response.json();
  const eingabe = data.message;
 
        
      // Hier prüfst du das Passwort
        if (eingabe) {
            onAbfrage();  // Login erfolgreich
        } else {
            // Bei falschem Passwort: Feld leeren
            setPassword("");  // ← DAS IST DIE LÖSUNG!
        }
    };

    return (
           <div style={{ 
            minHeight: 'calc(100vh - 120px)',
            display: 'flex',
            flexDirection: 'column'
        }}>
       <div style ={{width: '40%',
         margin: 'auto',
         marginTop: '25vh',
         padding: '20px',
         border: '2px solid white',
         borderRadius: '8px',
         textAlign: 'center',
        
         }}>
          <p
          style={{
            fontSize: "1.5rem",
            marginBottom: "20px",
          }}>Geschützer Bereich - Bitte Passwort eingeben</p>
           
            <form onSubmit={handleSubmit}>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Passwort eingeben"
                    autoFocus
                    style = {{
                        width: '80%',
                        height: '40px',
                        fontSize: '1.2rem',
                        padding: '5px 10px',
                        marginBottom: '20px',
                    }}
                />
                
            </form>
       </div>
         
        </div>
    );
}
   