const R = require('ramda')

console.log(
  R.applyTo(34)(R.multiply(2))
)
