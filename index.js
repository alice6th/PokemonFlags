const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/images", express.static("images"));
const searchAlike = require("./searchAlike");

const pokemons = require("./data/pokemoncolor.json");
const flags = require("./data/flgascolor.json");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});
app.get("/pokemons", (req, res) => {
  res.sendFile(__dirname + "/views/pokemons.html");
});

app.get("/api/pokemon", (req, res) => {
  res.header("Content-Type", "application/json; charset=utf-8");

  if (!req.query.name) {
    res.send("ポケモンが指定されていません");
  }
  const countries = searchAlike(req.query.name);
  console.log({ countries });
  res.send(countries);
  res.send(req.query);
});
app.get("/api/pokemon/all", (req, res) => {
  console.log(req.route);
  res.header("Content-Type", "application/json; charset=utf-8");

  res.send(pokemons);
});
app.get("/api/flag/all", (req, res) => {
  console.log(req.route);
  res.header("Content-Type", "application/json; charset=utf-8");

  res.send(flags);
});

app.get("/api/pokemon/:name", (req, res) => {
  console.log(req.params);
  res.header("Content-Type", "application/json; charset=utf-8");

  if (!req.params.name) {
    res.send("ポケモンが指定されていません");
  }
  const countries = searchAlike(req.params.name);
  console.log({ countries });
  res.send(countries);
});

app.get("/api/flags/:name", (req, res) => {
  console.log(req.params);
  res.header("Content-Type", "image/jpeg");

  res.sendFile(req.params.name);
  //   }
});

app.listen(3000, () => {
  console.log("listening on 3000");
});
