const R = require('ramda')

console.log(
  R.ap([R.multiply(2), R.add(3)], [1,2]),
  R.ap(R.concat, R.toUpper)('hello')
)


let data = {
  name: 'hello',
  age: 3 
}

console.log(
  R.ap(R.pipe(R.prop('name'), R.repeat), R.prop('age'))(data)
)
