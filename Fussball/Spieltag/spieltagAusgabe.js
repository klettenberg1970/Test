
const header = document.querySelector('.ueberschrift');
const ausgabe = document.querySelector('.ausgabe');
const ligaAuswahlFeld = document.querySelector('.liga-auswahl');
const spieltagAnzeige = document.querySelector('.spieltag-anzeige');

export const ligaAuswahl = (ligen, onLigaSelected) => {
    ligaAuswahlFeld.innerHTML = '';
    
    for (const [code, name] of Object.entries(ligen)) {
        const auswahlButton = document.createElement('button');
        auswahlButton.textContent = name;
        auswahlButton.dataset.code = code;
        
        auswahlButton.addEventListener('click', () => {
            onLigaSelected(code);
        });
        
        ligaAuswahlFeld.append(auswahlButton);
    }
};

export const ueberschrift = (aktuelleLiga, spieltagNummer) => {
    header.innerHTML = '';
    spieltagAnzeige.innerHTML=''
    const titel = document.createElement('h2');
    const spieltag = document.createElement('p');
    titel.textContent = aktuelleLiga
    spieltag.textContent = `Spieltag:  ${spieltagNummer}`
    header.append(titel)
    spieltagAnzeige.append(spieltag)
    return
}


export const spieltagAusgabe = (spielDaten) => {

    ausgabe.innerHTML = '';
    console.clear()

    spielDaten.forEach((spiel) => {
        
        console.log(spiel)
        const match = document.createElement('p');
        match.textContent = spiel
        ausgabe.append(match)
    })

    return
}



