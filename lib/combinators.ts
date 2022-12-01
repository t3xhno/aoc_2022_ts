const S = (...fns) => val => fns.reduce((acc, fn) => acc.concat(fn(val)), []);

module.exports = {
  S,
};
