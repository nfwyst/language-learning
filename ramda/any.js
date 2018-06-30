const R = require('ramda')

console.log(
  R.any(R.flip(R.lt)(2), [1,2,3])
)
