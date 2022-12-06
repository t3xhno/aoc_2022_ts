const fs = require("fs");
const { split } = require("ramda");
const compose = require("folktale/core/lambda/compose");

const INPUT_SRC = `${process.env.DAY}/${process.env.TEST ? "example" : "input"}.txt`;

const getInput = () => fs.readFileSync(INPUT_SRC).toString().trim();
const fetchDataRows = (splitBy = "\n") => compose(split(splitBy), getInput);

module.exports = { fetchDataRows, getInput };
