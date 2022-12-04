const { fetchDataRows, tLog, INPUT_SRC, Comb  } = require("../lib/index.ts");
const { compose, map, indexOf, flip, sum, splitEvery } = require("ramda");

const splitPacks = map(e => splitEvery(e.length / 2)(e));
const mapCommon = map(e => e[1].split("").find(d => e[0].includes(d)));
const scoreType = map(sum, map(flip(indexOf)(" abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ")));
const splitGroups = splitEvery(3);
const findBadge = map(a => a[0].split("").find(b => a[1].includes(b) && a[2].includes(b)));

const solve1 = compose(scoreType, mapCommon, splitPacks);
const solve2 = compose(scoreType, findBadge, splitGroups);

compose(tLog, Comb(solve1, solve2), fetchDataRows())(INPUT_SRC);

