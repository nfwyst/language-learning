const R = require('ramda');

console.log(
  R.assocPath(['a', 'b', 'c'])(0)({
    a: {
      age: 33,
      b: {
        c:  99
      }
    }
  })
);
