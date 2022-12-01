const fs = require("fs");
const R = require("ramda");

const getInput = fName => fs.readFileSync(fName).toString();
const fetchDataRows = (splitBy = "\n") => R.compose(R.split(splitBy), getInput);

const tLog = R.tap(a => console.dir(a, { depth: null }));

const S = (...fns) => val => fns.reduce((acc, fn) => acc.concat(fn(val)), []);

module.exports = { tLog, fetchDataRows, S };
