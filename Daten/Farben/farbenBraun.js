// Farbskala für Brauntöne
export function Farbarray() {
  let farbarray = [];
  for (const element of Object.values(braunPalette))
    farbarray.push(element);
  return farbarray;
}

const braunPalette = {
  "Kaffeebraun": "#4B3621",
  "Schokoladenbraun": "#3D2B1F",
  "Kastanienbraun": "#8B4513",
  "Taupe": "#483C32",
  "Ocker": "#CC7722"
};
