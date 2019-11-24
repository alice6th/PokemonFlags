const fs = require("fs");
const baseDir = "images/pokemon";
const files = fs.readdirSync(baseDir);
const path = require("path");

files.forEach(file => {
  console.log(file);
  if (file.match("-removebg-preview")) {
    console.log({ file });
    const fName = file.replace("-removebg-preview", "");

    const oldDir = path.resolve(baseDir, file);
    const newDir = path.resolve(baseDir, fName);
    console.log({ oldDir }, { newDir });
    fs.renameSync(oldDir, newDir);
  }
});
