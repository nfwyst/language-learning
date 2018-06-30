const R = require('ramda')

var getMetrics = R.applySpec({
  sum: R.add,
  nested: {
    num: R.multiply
  }
})

console.log(
  getMetrics(2, 4)
)
