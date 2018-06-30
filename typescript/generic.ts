// 泛型
let first = function<T>(a: T[]): T {
  return a[0];
}

let firstNumber = first<number>([1,2,3,4])

interface Some {
  <T>(a: T[]): T[];
}

let some: Some = function(a) {
  return [...a].slice(0, 1)
}


class Person<T, U> {
  name: T
  age: U
}

let p = new Person<string, number>();


console.log(firstNumber)
console.log(some([1,2,3]))
console.log(p)
