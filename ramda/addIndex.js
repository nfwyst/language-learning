const R = require('ramda')



console.log(
  R.addIndex(R.map)(R.add, [1,2,3,4,5])
)
