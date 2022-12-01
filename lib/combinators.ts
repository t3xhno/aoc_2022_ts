const K = require("crocks/combinators/constant");
const S = require("crocks/combinators/substitution");

// [identity] I :: a -> a
const I = S(K, K);

// [composeB] B :: (b -> c) -> (a -> b) -> a -> c
const B = S(K(S), K);

// [eagle] E :: (a -> d -> e) -> a -> (b -> c -> d) -> b -> c -> e
const E = B(B(B, B));

// [flip] C :: (a -> b -> c) -> (b -> a -> c)
const C = S(B(B, S), K(K));

// [applyTo] T :: a -> (a -> b) -> b
const T = C(I);

module.exports = {
  K,
  S,
  I,
  B,
  E,
  C,
  T,
};
