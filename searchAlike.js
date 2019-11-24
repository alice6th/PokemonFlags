const fs = require("fs");
const pokecolors = require("./data/pokemoncolor.json");
const flagcolors = require("./data/flgascolor.json");

const calcDistance = require("./calcDistance");

// const target = process.argv[2];
// console.log({ target });
const searchAlike = target => {
  const targetPokemonTmp = pokecolors.filter(pokemon => {
    if (pokemon.name === target) return pokemon;
  });
  const targetPokemon = targetPokemonTmp[0];
  //console.log(targetPokemon);

  if (!targetPokemon) {
    console.log("ポケモンが見つかりません");
  }

  const nearHue = flagcolors.filter(flag => {
    // if((Math.abs(flag.color[0]-targetPokemon.color[0])<10){ return flag}
    // if (Math.abs(flag.color[0] - targetPokemon.color[0]) < 10) return flag;
    //   console.log({ flag });
    if (calcDistance(flag, targetPokemon) < 50) return flag;
  });
  console.log("似てる国の数:" + nearHue.length);
  nearHue.forEach(item => {
    console.log(item.name);
  });
  return nearHue;
};
module.exports = searchAlike;
