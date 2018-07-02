const R = require('ramda');

var gt10 = R.gt(R.__, 10);
var lt20 = R.lt(R.__, 20);
var f = R.both(gt10, lt20);

console.log(
  gt10(15),
  f(15)
);
