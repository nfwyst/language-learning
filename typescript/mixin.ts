class a {
  namea: string
  changea() {
    this.namea = 'namea'
  }
}

class b {
  nameb: string 
  changeb() {
    this.nameb = 'changed'
  }
}

class c implements a, b {
  namea: string 
  nameb: string

  changeb() {}
  changea() {}
}

function mixin(dest: any, src: any[]) {
  src.forEach(item => {
    Object.getOwnPropertyNames(item.prototype).forEach(key => {
      dest.prototype[key] = item.prototype[key]
    })
  }) 
}

mixin(c, [a,b])

let c1 = new c();

c1.changeb();
c1.changea();

console.log(
  c1.nameb,
  c1.namea,
  c1
);
