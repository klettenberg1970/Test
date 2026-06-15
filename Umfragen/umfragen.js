
// const werte = ["Database", "Parliaments", "Institutes", "Taskers", "Methods", "Parties", "Surveys"];
const api = 'https://api.dawum.de/';

const getDaten =async () =>{

      const response = await fetch(api);
    const data = await response.json();
    console.log(data.Surveys)

}

getDaten()