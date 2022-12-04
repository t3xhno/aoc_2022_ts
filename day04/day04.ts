const { compose, split, map, sort, sum } = require("ramda");
const { fetchDataRows, INPUT_SRC, tLog, Comb } = require("../lib/index.ts");

const splitPairs = compose(sort((a, b) => a[0] - b[0] || b[1] - a[1]), map(split("-")), split(","));
const checkContain = map(([[a1, b1], [a2, b2]]) => +a1 <= +a2 && +b1 >= +b2);
const checkOverlap = map(([[a1, b1], [a2, b2]]) => +a1 <= +a2 && +a2 <= +b1);

const solve1 = compose(sum, checkContain, map(splitPairs));
const solve2 = compose(sum, checkOverlap, map(splitPairs));

compose(tLog, Comb(solve1, solve2), fetchDataRows())();

