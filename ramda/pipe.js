const R = require('ramda')

console.log(
  R.pipe(R.prop('name'), R.concat('hello '))({
    name: 'word'
  })
)
