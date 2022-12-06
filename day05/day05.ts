const  { compose, split, slice, identity, map } = require("ramda");
const { getInput, tLog, Comb } = require("../lib/index.ts");

const splitData = split(/\n\n/g);

const solve1 = compose(map(split(/\n/g)), slice(0, 1), identity);

compose(tLog, Comb(solve1), splitData, getInput)();
