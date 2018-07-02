const R = require('ramda');

console.log(
  R.call(R.add, 1, 2)
);


var indentN = R.pipe(R.repeat(' '),
                     R.join(''),
                     R.replace(/^(?!$)/gm));

var format = R.converge(R.call, [
  R.pipe(R.prop('indent'), indentN),
  R.prop('value')
])

console.log(
  format({indent: 2, value: 'foo\nbar\nbaz\n'})
);
