const { getInput, Comb, tLog } = require("../lib/index.ts");
const { compose, identity, forEach, uniq, split } = require("ramda");

const solve1 = val => arr => {
  let res = 0;
  arr.split("").forEach((_, i, a) => {
    if (uniq(a.slice(i - val, i)).length === val && res === 0) res = i;
  });
  return res;
};

compose(tLog, Comb(solve1(4), solve1(14)), getInput)();

