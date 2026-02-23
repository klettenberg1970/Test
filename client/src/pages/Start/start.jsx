import { useEffect, useState } from "react";


import LocalStorage from "./localStorage";

export default function Start() {
  const [nachricht, setNachricht] = useState({})
  useEffect(() => {
    const getmessage = async () => {
      const response = await fetch(`http://localhost:3000/api/start`);
      const data = await response.json();
      console.log(data)
      setNachricht(data);
    };
    getmessage();
  }, []);


  return (
    <div>
      <p>{nachricht.start}</p>
      <LocalStorage />  
    </div>
  )
}