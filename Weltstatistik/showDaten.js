const anzeige = document.querySelector(".anzeige");

// Hilfsfunktion für HR
const createHR = () => document.createElement('hr');

export const showDaten = (daten, land) => {
  
  anzeige.innerHTML = '';

  const titel = document.createElement('h2');
  titel.textContent = land;
  titel.classList = 'titel'
  anzeige.appendChild(titel)


  for (const element of daten) {
    const card = document.createElement('div');
    card.classList = 'card';

    const label = document.createElement('h3');
    label.textContent = element.label;

    const category = document.createElement('p');
    category.textContent = element.category;
    category.classList.add('category');

    const value = document.createElement('p');
    value.textContent = element.value;
    value.classList.add('value');

    card.appendChild(category);
    card.appendChild(createHR());  // Neue HR
    card.appendChild(label);
    card.appendChild(createHR());  // Neue HR
    card.appendChild(value);

    anzeige.appendChild(card);
  }
  console.log(daten);
}