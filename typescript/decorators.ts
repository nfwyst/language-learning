function setname(constructor: Function) {
  constructor.prototype.name = 'i have a new name yeah'
}

@setname
class A {
  name : string
  constructor() {}
}

console.log(
  new A().name
);
