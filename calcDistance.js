// const flags = require("./data/flgascolor.json");
// const pokemons = require("./data/pokemoncolor.json");
const chroma = require("chroma-js");

const main = (pokemon, flag) => {
  //   console.log(pokemon.name, flag.name);

  let distance = 0;

  //   pokemon.color.sort(function(a, b) {
  //     if (a[0] < b[0]) return -1;
  //     if (a[0] > b[0]) return 1;
  //     else 0;
  //   });
  //   flag.color.sort(function(a, b) {
  //     if (a[0] < b[0]) return -1;
  //     if (a[0] > b[0]) return 1;
  //     else 0;
  //   });
  for (i = 0; i < 5; i++) {
    const tmp = chroma.distance(flag.color[i], pokemon.color[i], "lab");
    distance += tmp / (i + 1);
    //console.log(tmp);
  }

  //   console.log({ distance });
  return distance;
};
module.exports = main;
