const R = require('ramda');

let todis4 = R.flip(R.subtract)(4)
console.log(
  todis4(14)
);
