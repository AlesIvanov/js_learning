const process = require('process');

// let arr = [1, 2, 3]
//
// for(let value of arr) {
//     process.stdout.write(`${value} `)
// }

// let arr = new Array(5);
//
// arr.fill(2, 1, 4)
//
// console.log(arr)
//
// let arr = [1, 2, 3, 4]
// for (let i = 0; i < arr.length; i++) {
//     arr[i] *= 2
// }
//
// console.log(arr)

// let arr = [1, 2, 3];
//
// let iterator = arr.keys();
//
// console.log(iterator)
//
// for(const key of iterator) {
//     process.stdout.write(`${key}`);
// }
//
// let arrKeys = [...arr.keys()];
//
// console.log(arrKeys)

// let arr = [1, 2, 3];
//
// let iterator = arr.values();
//
// for(const value of iterator) {
//     process.stdout.write(`${value}`)
// }

// let arr = [1, 2, 3];
//
// let iterator = arr.entries()
//
// for(const [key, value] of iterator);
//
// let arrEntries = [...arr.entries()]

// let arr = [];
//
// arr['Один'] = 1;
//
// console.log(arr)

// let map1 = new Map();
//
// map1.set('a', 1);
// map1.set('b', 2);
//
// console.log(map1)



// let car = {
//     model: 'ВАЗ-2109',
//     getModel: () => {
//         return this.model
//     }
// }
//
// console.log(car.getModel.bind(car)())

// console.log(car.getModel())
//
// let func = car.getModel
//
// console.log(func.call(car))

// let car = {
//     model: 'ВАЗ-2109',
//     func() {
//         let print = function (self) {
//             console.log(self.model)
//         }
//         print(this)
//     }
// }

// car.func()

// let car = {
//     model: 'ВАЗ-2109',
//     func() {
//         let self = this;
//         let print = function () {
//             console.log(self.model)
//         }
//         print(this)
//     }
// }
//
// car.func()

// let car = {
//     set model(name) {
//         this._model = name
//     },
//     get model() {
//         return this._model
//     }
// }
//
// console.log(car)
//
// car.model = 'ВАЗ-2109'
//
// console.log(car.model)

let objA = {a: 10}
let objB = {b: 55}


Object.setPrototypeOf(objB, objA);

console.log(objB.a)
console.log(objB.b)