import { useEffect, useState } from "react";


import LocalStorage from "./localStorage";

export default function Start() {
  const [nachricht, setNachricht] = useState({})

  
  useEffect(() => {
    const getmessage = async () => {
      const response = await fetch(`http://localhost:3000/api/start`);
      const data = await response.json();
      
      setNachricht(data);
    };
    getmessage();
  }, []);


  return (
     <div style={{ 
      minHeight: 'calc(100vh - 120px)', /* Viewport-Höhe minus Navigation und Footer */
      display: 'flex',
      flexDirection: 'column'
    }}>
      <p>{nachricht.start}</p>
      <LocalStorage />  
    </div>
  )
}