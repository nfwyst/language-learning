const R = require('ramda')

console.log(
  R.sort(function(a, b) { 
    a = a.charCodeAt(0)
    b = b.charCodeAt(0)
    return b - a;
  }, ['a', 'b', 'c'])
)
