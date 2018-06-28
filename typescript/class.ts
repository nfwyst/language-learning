class Baby {
  private _name: string
  constructor(name: string) {
    this._name = name
    console.log('hello world')
  }

  static smile() {
    console.log('smile')
  }

  public getBabyName(): string {
    return this._name
  }
}

let baby = new Baby('Nice')

Baby.smile();
console.log(baby.getBabyName())
