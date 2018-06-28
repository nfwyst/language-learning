function ts({x = 0, y  = 12}: po2 = {x: 2, y: 22, connect: function () {}}) {
  console.log(x, y)
}

interface po2 {
  x: number;
  y: number;

  connect(pwd: string): void;
}

ts()

class My implements po2 {
  x: any = 45;
  y: any = 'hello';

  connect(pwd: string): string{
    console.log(this.x, this.y)
    return 'hello'
  }
}

console.log(new My().connect('hello'))
