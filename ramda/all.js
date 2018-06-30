const R = require('ramda')

const arr = [1,2,3,4]

const nameEq = R.propEq('name', 'hello')
const ageEq = R.propEq('age', 10)
const allEq = R.allPass([nameEq, ageEq])

console.log(
  R.all(R.equals(10))(arr)
)

console.log(
  R.map(allEq, arr) 
)

console.log(
  R.all(R.allPass([
    R.lte(R.__, 20),
    R.gte(R.__, 10)
  ]))([11, 12, 13])
)
