const ausgabe = document.querySelector('.tabellen-container');

export const tabellenAnzeige = (daten) => {
    console.log(daten);

    // Mobile-Klassen für bestimmte Spalten
    const hideMobileClass = (index) => {
        const hideMobileIndices = [3, 4, 5, 7, 8, 9];
        return hideMobileIndices.includes(index) ? 'hide-mobile' : '';
    };

    let html = `
        <table>
            <thead>
                <tr>
                    <th>Platz</th>
                    <th>Verein</th>
                    <th>Punkte</th>
                    <th class="hide-mobile">Spiele</th>
                    <th class="hide-mobile">Tore</th>
                    <th class="hide-mobile">Gegentore</th>
                    <th>Tordifferenz</th>
                    <th class="hide-mobile">Siege</th>
                    <th class="hide-mobile">Unentschieden</th>
                    <th class="hide-mobile">Niederlagen</th>
                </tr>
            </thead>
            <tbody>
                ${daten.map((team, index) => `
                    <tr key="${index}">
                        <td>${team.Platz}</td>
                        <td>${team.teamName}</td>
                        <td>${team.Punkte}</td>
                        <td class="hide-mobile">${team.Spiele}</td>
                        <td class="hide-mobile">${team.Tore}</td>
                        <td class="hide-mobile">${team.Gegentore}</td>
                        <td>${team.Tordifferenz}</td>
                        <td class="hide-mobile">${team.S}</td>
                        <td class="hide-mobile">${team.U}</td>
                        <td class="hide-mobile">${team.N}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;

    ausgabe.innerHTML = html;
};