const fs = require("fs");
const list = fs.readFileSync("./country-code.txt", "utf-8").split("\n");
const cclist = [];
console.log({ list });
list.forEach(element => {
  const cc = element.split("\t");

  let tmp = {};
  tmp.code = cc[0];
  tmp.name = cc[1];
  console.log({ tmp });

  cclist.push(tmp);
});

fs.writeFileSync("cclist.json", JSON.stringify(cclist));
