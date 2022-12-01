const R = require("ramda");
const { INPUT_SRC, fetchDataRows, tLog, S } = require("../../lib/index.ts");

const calculateElfSupplies = R.pipe(
  R.split("\n"),
  R.map(n => +n),
  R.sum(),
);

const sortTotals = R.pipe(
  R.map(calculateElfSupplies),
  R.sort((a, b) => b - a),
);

const solve1 = R.pipe(
  sortTotals,
  R.head(),
);

const solve2 = R.pipe(
  sortTotals,
  R.slice(0, 3),
  R.sum(),
);

R.pipe(fetchDataRows("\n\n"), S(solve1, solve2), tLog)(INPUT_SRC);
