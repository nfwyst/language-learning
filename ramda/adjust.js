const R = require('ramda')

let ad = R.adjust(R.subtract(R.__, 1))

console.log(
  ad(0, [1,2,3,4]) 
)
