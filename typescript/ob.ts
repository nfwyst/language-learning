export class Observable<T> {
  age: T
  // placeholder
  constructor(age: T) {
    if (typeof age === 'number') {
      this.age = age
    }
  }
}
