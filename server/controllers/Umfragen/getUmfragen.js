


// const werte = ["Database", "Parliaments", "Institutes", "Taskers", "Methods", "Parties", "Surveys"];

const api = 'https://api.dawum.de/'


export const umfragedaten = async () => {
    const response = await fetch(api);
    const data = await response.json();

    // Alle Surveys durchgehen und die mit Parliament_ID = "0" sammeln
    const bundestagSurveys = [];

    for (const id of Object.keys(data.Surveys)) {
        const survey = data.Surveys[id];
        if (survey.Parliament_ID === "0") { // "0" ist die ID für den Bundestag
            bundestagSurveys.push({ id, ...survey });
        }
    }

    // Nach Datum sortieren (neueste zuerst)
    bundestagSurveys.sort((a, b) => new Date(b.Date) - new Date(a.Date));

    // Den neuesten Bundestags-Survey nehmen
    const lastBundestagSurvey = bundestagSurveys[0];

    // console.log(`Letzter BUNDESTAGS-Survey (ID: ${lastBundestagSurvey.id}):`);
    // console.log(JSON.stringify(lastBundestagSurvey, null, 2));



    // Neu (gibt Survey UND komplette data zurück):
    const umfragedaten = data.Surveys[lastBundestagSurvey.id];
    return {
        survey: umfragedaten,
        alleDaten: data  // ← die kompletten API-Daten mit allen Namen!
    };
}




