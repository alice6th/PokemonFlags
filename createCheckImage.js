const writeCanvas = require("./bin/canvas");
const colorThief = require("./bin/colorThief");
const file = "./images/pokemon/ライチュウ.png";
const path = require("path");
const fs = require("fs");

const base = "./images/flags";
const files = fs.readdirSync(base);
console.log(files.length);

files.forEach(file => {
  const image = path.resolve(base, file);
  console.log({ image });
  colorThief(image).then(colors => {
    const imageName = path.basename(file, path.extname(file));

    let data = {};
    data.name = imageName;
    data.url = "contentUrl";
    writeCanvas(image, colors, data).then(result => {
      console.log(result);
    });
  });
});
