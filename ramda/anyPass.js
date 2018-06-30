const R = require('ramda')


console.log(
  R.anyPass([
    R.flip(R.gte)(10),
    R.flip(R.gte)(100)
  ])(11)
)
