const fs = require("fs");
const R = require("ramda");

const INPUT_SRC = `day01/${process.env.TEST ? "example" : "input"}.txt`;

const getInput = fName => fs.readFileSync(fName).toString();
const fetchDataRows = (splitBy = "\n") => R.compose(R.split(splitBy), getInput);

const tLog = R.tap(a => console.dir(a, { depth: null }));

const S = (...fns) => val => fns.reduce((acc, fn) => acc.concat(fn(val)), []);

module.exports = { INPUT_SRC, tLog, fetchDataRows, S };
