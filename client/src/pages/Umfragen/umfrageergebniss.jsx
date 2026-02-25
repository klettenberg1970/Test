

export default function Umfrageergebnisse({ergebnisse}) {
    console.log(ergebnisse);
    console.log(`Der Typ von ergebnisse ist: ${typeof ergebnisse}`);
    
    return(<div>

     {Object.values(ergebnisse || {}).map((value) => (
    <div key={value.kurzform}>  {/* kurzform als key (falls eindeutig) */}
        <p> {value.kurzform}: {value.prozent} %</p>
    </div>
))}


    </div>)
}