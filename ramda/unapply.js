const R = require('ramda')

console.log(
  R.unapply(JSON.stringify)(1,2,3),
  R.apply(R.unapply(R.apply(Math.max)), [1, 2, 3, 4])
)
