const { tap } = require("ramda");

const tLog = tap(a => console.dir(a, { depth: null }));

const S = (...fns) => val => fns.reduce((acc, fn) => acc.concat(fn(val)), []);

const dir = {
  ASC: (a, b) => a - b,
  DESC: (a, b) => b - a,
};

// Rock/Paper/Scissors maps
const pointsMap = {
  "A": 1,
  "B": 2,
  "C": 3,
};

const decryptMap = {
  "X": "A",
  "Y": "B",
  "Z": "C",
};

const resMap = {
  "A": { w: "C", l: "B" },
  "B": { w: "A", l: "C" },
  "C": { w: "B", l: "A" },
};

module.exports = {
  dir,
  tLog,
  resMap,
  Comb: S,
  pointsMap,
  decryptMap,
};
