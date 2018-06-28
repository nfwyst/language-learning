enum fruit {
  apple = 0,
  banner = 1
}

type Address = string 
type phone = number

class Person {
  name: string = 'name'
  age: number = 24
  other: any = ''
  like: fruit
  address: [Address, phone]
  syp() : void {
    console.log('what  the fuck')
  }
  fuck() : never {
    throw Error('this is an error')
  }
}

let pp = new Person 
pp.name = 'name'
pp.age = 15
pp.like = fruit.apple
pp.syp()
