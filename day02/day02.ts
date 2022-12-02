const compose = require("folktale/core/lambda/compose");
const { split, map, assoc, lensProp, sum, view } = require("ramda");
const { tLog, Comb, fetchDataRows, INPUT_SRC, S, C, resMap, decryptMap, pointsMap } = require("../lib/index.ts");

const evalWinner = (op, me) => op === me ? 3 : resMap[op].w === me ? 0 : 6;
const calcResult = ({ op, me }) => pointsMap[me] + evalWinner(op, me);
const evalRound = S(C(assoc("result")), calcResult);

const getPick = r => r[1] === "Y" ? r[0] : r[1] === "X" ? resMap[r[0]].w : resMap[r[0]].l;
const makeObj = t => r => ({ "op": r[0], "me": t === 1 ? decryptMap[r[1]] : getPick(r) });
const makeInput = t => compose(map(makeObj(t)), map(split(/\s/g)));
const sumResults = compose.all(sum, map(view(lensProp("result"))), map(evalRound));

const solve = t => compose.all(sumResults, makeInput(t));

compose.all(tLog, Comb(solve(1), solve(2)), fetchDataRows())(INPUT_SRC);

console.log("no");