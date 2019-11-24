const flags = require("./data/flgascolor.json");
const pokemons = require("./data/pokemoncolor.json");
const chroma = require("chroma-js");

let distance = 0;
pokemons[1].color.sort(function(a, b) {
  if (a[0] < b[0]) return -1;
  if (a[0] > b[0]) return 1;
  else 0;
});
flags[1].color.sort(function(a, b) {
  if (a[0] < b[0]) return -1;
  if (a[0] > b[0]) return 1;
  else 0;
});
for (i = 0; i < 5; i++) {
  const tmp = chroma.distance(flags[1].color[i], pokemons[1].color[i], "lab");
  distance += tmp;
  console.log(tmp);
}

console.log({ distance });
