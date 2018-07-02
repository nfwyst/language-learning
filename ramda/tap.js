const R = require('ramda');

let log = R.bind(console.log, console);

// tap log to 100
R.tap(log)(100)
