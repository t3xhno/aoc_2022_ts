const { tap } = require("ramda");

const tLog = tap(a => console.dir(a, { depth: null }));

const dir = {
  ASC: (a, b) => a - b,
  DESC: (a, b) => b - a,
};

module.exports = {
  dir,
  tLog,
};
