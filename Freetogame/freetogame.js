



const url = 'https://www.freetogame.com/api/games?platform=windows';

const main = async () => {
    const container = document.getElementById('games-container');

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP-Fehler! Status: ${response.status}`);
        }

        const daten = await response.json();
        container.innerHTML = '';

        for (const game of daten) {
            const card = document.createElement('article');
            card.className = 'game-card';

            card.innerHTML = `
                <div class="thumbnail-wrapper">
                    <img src="${game.thumbnail}" alt="${game.title}" loading="lazy">
                </div>
                <div class="game-info">
                    <span class="genre">${game.genre || ''}</span>
                    <h2 class="game-title">${game.title}</h2>
                    <p class="description">${game.short_description}</p>
                    <a href="${game.game_url}" target="_blank" rel="noopener noreferrer" class="game-link">
                        Zum Spiel
                    </a>
                </div>
            `;

            container.appendChild(card);
        }
    } catch (error) {
        console.error('Fehler beim Laden der Spiele:', error);
        container.innerHTML = `<p class="error">Fehler beim Laden der Spiele: ${error.message}</p>`;
    }
};

main();
