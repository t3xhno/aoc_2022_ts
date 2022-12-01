const { sum, sort, split, head, map, take } = require("ramda");
const { INPUT_SRC, fetchDataRows, S, dir, tLog } = require("../lib/index.ts");
const compose = require("folktale/core/lambda/compose");

const calculateElfSupplies = compose(sum, split("\n"));
const sortTotals = compose(sort(dir.DESC), map(calculateElfSupplies));

const solve1 = compose(head, sortTotals);
const solve2 = compose.all(sum, take(3), sortTotals);

compose.all(tLog, S(solve1, solve2), fetchDataRows("\n\n"))(INPUT_SRC);
