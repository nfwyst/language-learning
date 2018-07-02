const R = require('ramda');

let log = R.bind(console.log, console);
R.pipe(
  R.assoc('a', 2),
  R.tap(log),
  R.assoc('a', 3),
  R.tap(log)
)({ a: 1 })
