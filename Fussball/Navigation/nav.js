// Diese Funktion lädt die Navbar von der externen Datei
export async function loadNavbar() {
    try {
        // 1. Die nav.html Datei abrufen
        const response = await fetch('./Navigation/nav.html');
        
        // 2. Den HTML-Inhalt als Text auslesen
        const navbarHTML = await response.text();
        
        // 3. Die Navbar an den Anfang des Body einfügen
        document.body.insertAdjacentHTML('afterbegin', navbarHTML);
        
        // 4. Event-Listener für das Auf-/Zuklappen registrieren
        const menubtn = document.querySelector('.menubutton');
        const menuliste = document.querySelector('.menuliste');
        
        if (menubtn && menuliste) {
            menubtn.addEventListener('click', () => {
                menuliste.classList.toggle('aktiv');
            });
        }
        
    } catch (error) {
        console.error('Navbar konnte nicht geladen werden:', error);
    }
}
