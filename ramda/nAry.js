const R = require('ramda');

console.log(
  R.nAry(2, Math.max)(1),
  R.nAry(2, Math.max)(1, 2),
);
