const chroma = require("chroma-js");
const data = [47.5, 0.0967741935483871, 0.9725490196078431];

console.log(chroma(data).hsv());
