const R = require('ramda')

const p1 = { age: 11 }
const p2 = { age: 21 }
const p3 = { age: 31 }

const byAge = R.ascend(R.prop('age'))

console.log(
  R.sort(byAge)([p3, p2, p1]),
  byAge(p3, p2)
)
