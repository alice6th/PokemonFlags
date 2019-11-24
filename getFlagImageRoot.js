const request = require("request");
const fs = require("fs");
const cheerio = require("cheerio");
//const getPokeImage = require("./getPokeImage");
const wiki = fs.readFileSync("./source/flags.htm");
const $ = cheerio.load(wiki, { decodeEntities: false });
console.log($("tbody#list").html());

const url =
  "https://ja.wikipedia.org/wiki/%E5%9B%BD%E6%97%97%E3%81%AE%E4%B8%80%E8%A6%A7";

request(url, (e, response, body) => {
  if (e) {
    console.error(e);
  }
  try {
    const $ = cheerio.load(body, {
      decodeEntities: false,
    });

    //console.log($(".wikitable").html());

    let list = $(".wikitable")
      .html()
      .split("</tr>");
    console.log({ list });
    list.shift();
    console.log(list[0]);
    list.pop();
    console.log(list[list.length - 1]);
  } catch (e) {
    console.error(e);
  }
});
//<td(?: .+?)?>.*?<br>+U.
//<b(?: .+?)?>
