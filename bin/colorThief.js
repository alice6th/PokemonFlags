/** colorthief.js
 *  input :String url
 *  output:Array colors[]
 */

var ColorThief = require("color-thief-jimp");
var Jimp = require("jimp");
const fs = require("fs");

imageFilepathOrUrl = "./a.png";

function colorThief(url) {
  return new Promise(function(resolve) {
    Jimp.read(url, (err, sourceImage) => {
      if (err) {
        console.error(err);
        return;
      }

      var dominantColor = ColorThief.getColor(sourceImage);
      // dominantColor = [intRed, intGreen, intBlue]
      console.log({ dominantColor });
      var palette = ColorThief.getPalette(sourceImage, 8);
      // palette = [ [intRed, intGreen, intBlue], [intRed, intGreen, intBlue], ... ]
      //   fs.writeFileSync(__dirname + "/../test.txt", palette);
      //console.log(dominantColor);
      resolve(palette);
    });
  });
}
module.exports = colorThief;
