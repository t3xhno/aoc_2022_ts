const fs = require("fs");
const { split, tap } = require("ramda");
const compose = require("folktale/core/lambda/compose");

const INPUT_SRC = `day01/${process.env.TEST ? "example" : "input"}.txt`;

const getInput = fName => fs.readFileSync(fName).toString();
const fetchDataRows = (splitBy = "\n") => compose(split(splitBy), getInput);

const tLog = tap(a => console.dir(a, { depth: null }));

const S = (...fns) => val => fns.reduce((acc, fn) => acc.concat(fn(val)), []);

const dir = {
  ASC: (a, b) => a - b,
  DESC: (a, b) => b - a,
};

module.exports = { INPUT_SRC, tLog, fetchDataRows, S, dir };
