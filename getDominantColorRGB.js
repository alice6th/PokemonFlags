const ColorThief = require("color-thief-jimp");
const Jimp = require("jimp");
const chroma = require("chroma-js");
// const testUrl = "./images/pokemon/アーマーガア.png";

const getDominantColorHSV = url => {
  return new Promise(function(resolve, reject) {
    Jimp.read(url, (err, sourceImage) => {
      if (err) {
        console.error(err);
        console.log({ url });
        reject;
      }

      //   var dominantColor = ColorThief.getColor(sourceImage);
      var dominantPalette = ColorThief.getPalette(sourceImage, 3);
      console.log({ dominantPalette });
      let palette = [];
      dominantPalette.forEach(color => {
        //const color = chroma(dominantColor).hsv();
        palette.push(chroma(color));
      });
      //   console.log({ palette });
      resolve(palette);
    });
  });
};
getDominantColorHSV(testUrl).then(res => {
  console.log(res);
});

module.exports = getDominantColorHSV;
