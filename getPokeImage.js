const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
//const url = "https://game8.jp/pokemon-sword-shield/260149";
//const url = "https://gamy.jp/pokemon-sword-shield/pkmnss-bewear";
const main = url => {
  request(url, (e, response, body) => {
    if (e) {
      console.error(e);
    }
    try {
      body = body.replace(/\n/g, "");
      const $ = cheerio.load(body, {
        decodeEntities: false,
      });
      //Get pokemon name
      const nameDOM = $(".wikitable tbody tr:nth-child(1) ");
      const name = nameDOM.text().replace(/\n/g, "");
      //Get pokemon image url
      const list = $(".wikitable tbody tr:nth-child(2) td:nth-child(1) ");
      //console.log(list.html());
      const images = list.html().split("\n");
      const pokeImage = images[0].split(" ");
      const pokeImageSrc = pokeImage[pokeImage.length - 1]
        .split("=")[1]
        .split('"')[1];

      getPokeImage(name, pokeImageSrc);
    } catch (e) {
      console.error(e);
    }
  });
};

getPokeImage = (name, imageUrl) => {
  console.log({ name }, { imageUrl });

  request(
    { method: "GET", url: imageUrl, encoding: null },
    (e, response, body) => {
      if (e) {
        console.error(e);
      }

      if (!e && response.statusCode === 200) {
        const fName = "./images/pokemon/" + name + ".png";
        fs.writeFile(fName, body, "binary", () => {
          console.log(name + "の画像保存したです");
        });
      }

      try {
      } catch (e) {
        console.error(e);
      }
    }
  );
};

module.exports = main;
