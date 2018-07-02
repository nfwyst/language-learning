import { Observable } from './ob'


declare global {
  interface Array<T> {
    toObservable(arg: T): Observable<T>
  }
}

Array.prototype.toObservable = function (arg) {
  return new Observable<typeof arg>(arg)
}

let a = [1, 2, 3].toObservable(4)

console.log(
  a
);
