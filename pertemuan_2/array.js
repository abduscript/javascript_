// two ways to make an array
// 1. Using array literals
let fruits = ['apple', 'banana', 'orange'];
// 2. Using the Array constructor   
let numbers = new Array(1, 2, 3, 4, 5);
// 3. Using the Array.of() method
let colors = Array.of('red', 'green', 'blue');
// 4. Using the Array.from() method
let str = 'hello';
let chars = Array.from(str); // ['h', 'e', 'l', 'l', 'o']
// 5. Using the spread operator
let moreNumbers = [...numbers, 6, 7, 8]; // [1, 2, 3, 4, 5, 6, 7, 8]


// challenge array

let myFavHeroes = new Array();

myFavHeroes = ['alpha', 'lancelot', 'luo yi', 'gusion', 'julian', 'saber'];
myFavHeroes.push('melissa')
// myFavHeroes[1] = ''
myFavHeroes[1] = 0
// console.log(myFavHeroes.length) // 6
console.log(myFavHeroes)


// challenge typedArray
let mytypedArray = new Uint8Array([5, 10, 15, 20]); // 5 elements of type Int16
let number = [25, 30, 35, 40]; // 4 elements of type Int16
mytypedArray.add(number)  // [5, 10, 15, 20, 25, 30, 35, 40]
// console.log(mytypedArray.length) // 8
