// Farbskala für Gelbtöne
export function Farbarray() {
  let farbarray = [];
  for (const element of Object.values(gelbPalette))
    farbarray.push(element);
  return farbarray;
}

const gelbPalette = {
  "Zitronengelb": "#FFF700",
  "Pastellgelb": "#FFECB3",
  "Goldgelb": "#FFC107",
  "Senfgelb": "#D4A017",
  "Ockergelb": "#C2B280",
  "Kurkuma": "#FFB300",
  "Bananengelb": "#FFE135",
  "Honiggelb": "#FFC30B",
  "Maisgelb": "#FFEB00",
  "Sonnengelb": "#FFDD00"
};
