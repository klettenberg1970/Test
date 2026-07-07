const anzeige = document.querySelector(".anzeige");



export const showDaten = (daten)=>{

  for (const element of daten){
    const card = document.createElement('div')
    card.classList ='card';
    const label = document.createElement('p')
    label.textContent= element.label
    const category = document.createElement('p')
    category.textContent= element.category;
    const value =  document.createElement('p')
    value.textContent= element.value;
    card.appendChild(category);
    card.appendChild(label);
    card.appendChild(value);
    anzeige.append(card)
  }  
console.log(daten)

}