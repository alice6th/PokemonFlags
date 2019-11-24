const fs = require("fs");
const getDominantColorHSV = require("./getDominantColorHSV");
const path = require("path");
const baseDir = "./images/pokemon";
const imageList = fs.readdirSync(baseDir);

const json = [];

imageList.forEach(async image => {
  const pokemonName = path.basename(image, path.extname(image));
  //console.log({ pokemonName });
  const imageUrl = path.join(baseDir, image);
  const getColor = async url => {
    const color = await getDominantColorHSV(url);
    return color;
  };
  getColor(imageUrl).then(color => {
    const tmp = {};
    console.log(color);
    setTimeout(() => {
      tmp.name = pokemonName;
      tmp.color = color;
      console.log({ tmp });
      json.push(tmp);
    }, 1000);
  });
});

setTimeout(() => {
  console.log({ json });
  fs.writeFileSync("./data/pokemoncolor.json", JSON.stringify(json));
}, 15000);
