import './umfragenAuswahl.css';
const wahlen = ["Bundestag","Baden-Württemberg", "Bayern", "Berlin", "Brandenburg", "Bremen", "Hamburg", "Hessen", "Mecklenburg-Vorpommern", "Niedersachsen", "Nordrhein-Westfalen", "Rheinland-Pfalz", "Saarland", "Sachsen", "Sachsen-Anhalt", "Schleswig-Holstein", "Thüringen", "Europaparlament"];


export default function UmfragenAuswahl({ onAuswahl }) {
    return (
        <div className='selectcontainer'>   
           
            <select onChange={(e) => onAuswahl(e.target.value, wahlen.indexOf(e.target.value))}>
                <option value="">-- Bitte wählen --</option>
                {wahlen.map((wahl) => ( 
                    <option key={wahl} value={wahl}>
                        {wahl}
                    </option>   
                ))}
            </select>
        </div>
    );
}