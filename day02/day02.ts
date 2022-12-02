const compose = require("folktale/core/lambda/compose");
const { split, map, assoc, lensProp, sum, view } = require("ramda");
const { tLog, Comb, fetchDataRows, INPUT_SRC, S, C, resMap, decryptMap, pointsMap } = require("../lib/index.ts");

const getPick = r => r[1] === "Y" ? r[0] : r[1] === "X" ? resMap[r[0]].w : resMap[r[0]].l;
const makeObj1 = r => ({ "op": r[0], "me": decryptMap[r[1]] });
const makeObj2 = r => ({ "op": r[0], "me": getPick(r) });
const evalWinner = (op, me) => op === me ? 3 : resMap[op].w === me ? 0 : 6;
const calcResult = ({ op, me }) => pointsMap[me] + evalWinner(op, me);

const evalRound = S(C(assoc("result")))(calcResult);

const solve1 = compose.all(sum, map(view(lensProp("result"))), map(evalRound), map(makeObj1), map(split(/\s/g)));
const solve2 = compose.all(sum, map(view(lensProp("result"))), map(evalRound), map(makeObj2), map(split(/\s/g)));

compose.all(tLog, Comb(solve1, solve2), fetchDataRows())(INPUT_SRC);
