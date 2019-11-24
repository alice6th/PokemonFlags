const fs = require("fs");
const cheerio = require("cheerio");
const getPokeImage = require("./getPokeImage");

//const file = fs.readFileSync("./source/page1.htm");
const fileList = fs.readdirSync("./source");
console.log(fileList);
fileList.forEach(element => {
  const file = fs.readFileSync("./source/" + element);
  console.log({ file });
  const $ = cheerio.load(file, {
    decodeEntities: false,
  });

  getDomsList = $ => {
    const list = $(".s-articleItem__wiki div table tbody ")
      .html()
      .split("</tr>");

    list.shift();
    list.pop();
    list.pop();
    //console.log(list[list.length - 1]);
    //console.log(list.length);
    return list;
  };

  const domList = getDomsList($);

  domList.forEach(element => {
    const $ = cheerio.load(element + "</tr>", { decodeEntities: false });
    const pokeUrl = $("body")
      .find("a")
      .attr("href");
    getPokeImage(pokeUrl);
  });
});
//getPokeImage("https://gamy.jp/pokemon-sword-shield/pkmnss-bewear");
