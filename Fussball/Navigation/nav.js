
// Diese Funktion lädt die Navbar von der externen Datei
export async function loadNavbar() {
    try {
        // 1. Die navbar.html Datei abrufen
        const response = await fetch('./Navigation/nav.html');
        
        // 2. Den HTML-Inhalt als Text auslesen
        const navbarHTML = await response.text();
       
        
        // 3. Die Navbar an einer bestimmten Stelle in Ihre Seite einfügen
        //    Suchen Sie nach dem ersten <nav>-Element oder fügen Sie es am Anfang ein
        document.body.insertAdjacentHTML('afterbegin', navbarHTML);
        
        // Alternativ: Wenn Sie einen bestimmten Container haben:
        // document.getElementById('nav-container').innerHTML = navbarHTML;
        
    } catch (error) {
        console.error('Navbar konnte nicht geladen werden:', error);
    }
}

