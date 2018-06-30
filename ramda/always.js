const R = require('ramda')

const k = x => _ => x
const t = R.always('Tree')

console.log(k(10)("hello world"))
console.log(t())

