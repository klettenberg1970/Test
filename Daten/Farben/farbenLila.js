// Farbskala für Lilatöne
export function Farbarray() {
  let farbarray = [];
  for (const element of Object.values(lilaPalette))
    farbarray.push(element);
  return farbarray;
}

const lilaPalette = {
  "Lavendel": "#E6E6FA",
  "Flieder": "#D8BFD8",
  "Violett": "#8A2BE2",
  "Amethyst": "#9966CC",
  "Purpur": "#800080"
};
