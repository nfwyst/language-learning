const R = require('ramda')
var test = {
  name: 'haha',
  age: 80
}
console.log(
  R.dissoc('name', test),
  test
)
