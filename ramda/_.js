const R = require('ramda')

let myAdd = (x,y,z) => x + y + z

let fn = R.curry(myAdd)

console.log(fn(R.__, 2, 3)(1))
