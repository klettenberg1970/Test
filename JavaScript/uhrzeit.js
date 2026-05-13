

    
      export  function aktualisiereUhrzeit() {
            const jetzt = new Date();
            const stunden = jetzt.getHours().toString().padStart(2, '0');
            const minuten = jetzt.getMinutes().toString().padStart(2, '0');
            const sekunden = jetzt.getSeconds().toString().padStart(2, '0');

            const uhrzeitString = `${stunden}:${minuten}:${sekunden}`;
            document.getElementById('uhrzeit').textContent = uhrzeitString;
        }

        

        export    function aktualisiereDatum() {
            const jetzt = new Date();
            const tag = jetzt.getDate().toString().padStart(2, '0');
            const monat = (jetzt.getMonth() + 1).toString().padStart(2, '0'); // Monate sind 0-basiert
            const jahr = jetzt.getFullYear();

            const datumString = `${tag}.${monat}.${jahr}`;
            document.getElementById('datum').textContent = datumString;
        }

        
