import './umfragenText.css';

export default function Umfragentext({umfragen})  {
console.log(umfragen);
    return(
        <div className="textcontainer">
        <h1> {umfragen.parlament?.name}</h1>
        <p> Veröffentlichung: {umfragen.veroeffentlichung}</p>
        <p> Zeitraum: {umfragen.zeitraum}</p>
        <p> Befragte: {umfragen.befragte}</p>
        <p> Institut:  {umfragen.institut?.name}</p>
        <p> Auftraggeber:  {umfragen.auftraggeber?.name}</p>
        <p> Methode:  {umfragen.methode?.name}</p>
        </div>
        
    )
}