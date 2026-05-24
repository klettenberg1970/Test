const linksId = '1Hy7BlW81IaEi1baXFn5KqhZIkGM12FX6'
const API = 'https://backend-dashboard-1slu.onrender.com'
const linkContainer = document.querySelector(".links-container")

const getLinks = async () => {
    const response = await fetch(`${API}/api/projekte/datei/${linksId}`);
    const daten = await response.json();
    return daten
}

marked.use({
  renderer: {
    link({href, title, text}) {
      return `<a href="${href}" target="_blank" rel="noreferrer"> ${text}</a> `;
    }
  }
});

const renderLinks = async () => {
    const alleLinks = await getLinks();
    linkContainer.innerHTML = marked.parse(alleLinks.singleDatei);
}

renderLinks();