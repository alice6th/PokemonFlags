/** canvas.js
 * Module which read image from path and create palette
 * input:path
 * colors
 * input:data{name:"name",url:URL}
 * output colors[]
 */

const { createCanvas, loadImage } = require("canvas");
const canvas = createCanvas(540, 540);
const ctx = canvas.getContext("2d");

const dataUriToBuffer = require("data-uri-to-buffer");
const fs = require("fs");

/*const colors = [
  [206, 219, 210],
  [98, 100, 107],
  [121, 133, 147],
  [205, 168, 141],
  [150, 152, 170],
  [122, 123, 95],
];*/

writeCanvas = (filePath, colors, data) => {
  console.log("filePath : " + filePath);
  console.log("colors: " + colors);
  console.log("data: " + data);

  return new Promise(function(resolve, reject) {
    ctx.font = "20px Impact";

    ctx.fillStyle = "rgb(255,255,255)";
    //background
    ctx.fillRect(0, 0, 540, 540);
    ctx.fillStyle = "rgb(0, 0, 0)";
    var x = canvas.width / 2;
    var y = canvas.height / 2;
    //  ctx.textBaseline = "center";

    ctx.fillText("「" + data.name + "」", 0, 40);

    ctx.font = "10px serif";
    ctx.fillText("from:" + data.url, 32, canvas.height - 40);
    console.log(colors);
    // 回数は決めうちだからパラメータ考えなきゃね
    colors.forEach((element, index) => {
      console.log(element);
      ctx.fillStyle =
        "rgb(" + element[0] + "," + element[1] + "," + element[2] + ")";
      ctx.fillRect(18 + index * 72, 400, 72, 72);
    });

    // Draw cat with lime helmet
    //loadImage("a.png").then(image => {
    loadImage(filePath)
      .then(image => {
        console.log("--------------");
        console.log(image);
        console.log("--------------");
        console.log(image.height + "px");
        console.log(image.width + "px");
        // 横長の画像の場合
        ctx.fillStyle = "rgb(32, 32, 32)";
        if (image.height < image.width) {
          const ratio = image.width / 320;
          const modifiedHeight = image.height / ratio;
          ctx.fillRect(
            106,
            56 + (320 - modifiedHeight) / 2,
            328,
            modifiedHeight + 8
          );

          ctx.drawImage(
            image,
            110,
            60 + (320 - modifiedHeight) / 2,
            320,
            modifiedHeight
          );
        } else {
          const ratio = image.height / 320;
          const modifiedWidth = image.width / ratio;
          ctx.fillRect(
            //66 + (320 - modifiedWidth) / 2,
            266 - modifiedWidth / 2,
            56,
            modifiedWidth + 8,
            328
          );

          ctx.drawImage(image, 270 - modifiedWidth / 2, 60, modifiedWidth, 320);
        }
        const decoded = dataUriToBuffer(canvas.toDataURL());
        console.log("---------------------");
        console.log(decoded);
        console.log("---------------------");

        fs.writeFile(
          "./images/checkflag/color_" + data.name + ".jpg",
          decoded,
          err => {
            if (err) {
              console.log(err);
              reject("ファイルの保存に失敗しました");
            } else {
              resolve("ファイルを保存しました");
            }
          }
        );
      })
      .catch(error => {
        console.error(error);
        reject(error);
      });
  });
};
module.exports = writeCanvas;
/** bing  search
 * color-thief
 * canvas
 * end
 * */
