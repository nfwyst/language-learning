const R = require('ramda');

console.log(
  R.dissocPath(['a', 'b', 'c'])({
    a: {
      b: {
        c: 3
      },
      age: 2
    },
    age: 1
  })
);
