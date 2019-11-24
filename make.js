const fs = require("fs");
const file = fs.readFileSync("./source/flaglist.htm");
const cheerio = require("cheerio");
//console.log(file);

const $ = cheerio.load(file, { decodeEntities: false });

const doms = $("body")
  .html()
  .split("\n\n");
//console.log(doms);
doms.push("");

doms.forEach(index => {
  if (index % 3 == 1) {
    console.log(doms[index]);
  }
  //console.log(dom);}
});

console.log(doms);
