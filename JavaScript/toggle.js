const toggleBtn = document.querySelector('#toggle');

export const toggle = () => {
    toggleBtn.addEventListener('click', () => {
        // 1. Klasse umschalten und Ergebnis in einer Variable speichern
        const isDark = document.body.classList.toggle('dark-mode');

        // 2. Text basierend auf dem Modus ändern
        if (isDark) {
            toggleBtn.textContent = ' Hell';
            
            
        } else {
            toggleBtn.textContent = 'Dunkel';
            
           
        }
    });
}

