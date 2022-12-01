const fs = require("fs");
require("dotenv").config();
const R = require("ramda");

const INPUT_SRC = `day01/${process.env.TEST ? "example" : "input"}.txt`;

const input = fs.readFileSync(INPUT_SRC, "utf8")
  .trim()
  .split("\n\n")
  .map(n => n.split(/\s/g))
  .map(arr => arr.reduce((acc, num) => acc + +num, 0));

const solve1 = arr => arr.sort((x, y) => y - x)[0];
console.log(solve1(input));

const solve2 = arr => arr.slice(0,3).reduce((acc, num) => acc + num, 0);
console.log(solve2(input));
