var ColorThief = require("color-thief-jimp");
var Jimp = require("jimp");
const chroma = require("chroma-js");
imageFilepathOrUrl = "./images/flags/バーレーン国.png";

Jimp.read(imageFilepathOrUrl, (err, sourceImage) => {
  if (err) {
    console.error(err);

    return;
  }

  var dominantColor = ColorThief.getColor(sourceImage);
  // dominantColor = [intRed, intGreen, intBlue]

  var palette = ColorThief.getPalette(sourceImage, 8);
  // palette = [ [intRed, intGreen, intBlue], [intRed, intGreen, intBlue], ... ]

  const color = chroma(dominantColor).hsv();
  //   console.log({ color });
  //console.log(palette);
});
