import { useState, useEffect } from "react";

export default function LocalStorage() {
  const [storageData, setStorageData] = useState({});

  useEffect(() => {
    const data = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      data[key] = localStorage.getItem(key);
    }
    setStorageData(data);
  }, []);

  return (
    <div>
      <h2>Inhalt des localStorage:</h2>
      <pre>{JSON.stringify(storageData, null, 2)}</pre>
    </div>
  );
}
