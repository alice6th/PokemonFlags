const fs = require("fs");
const cc = require("./cclist.json");
const path = require("path");
const images = fs.readdirSync("./images/flags");
//console.log(images);
images.forEach(element => {
  const code = path.basename(element, path.extname(element));
  console.log(code);
  const tmp = cc.filter(item => {
    if (item.code == code.toUpperCase()) return item;
  });
  let cName = "";

  tmp.forEach(el => {
    cName += el.name;
  });
  console.log({ cName });
  //   console.log(tmp[0]["name"]);

  const oldPath = path.resolve("images", "flags", element);
  const newPath = path.resolve("images", "flags", cName + ".png");
  fs.renameSync(oldPath, newPath);
});
