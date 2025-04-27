//  correct TypedArray
//. Membuat TypedArray 1. Membuat TypedArray 2

let mytypedArray = new Uint8Array([5, 10, 15, 20]);

// Misal mau tambah angka 25
let tempArray = [...mytypedArray, 25]; // jadi array biasa dulu
let newTypedArray = new Uint8Array(tempArray); // lalu buat ulang jadi Uint8Array

console.log(newTypedArray); // Uint8Array(5) [5, 10, 15, 20, 25]
console.log(newTypedArray.length); // 5
console.log(newTypedArray[0]); // 5

// Membuat TypedArray 2

let mytypedArrays = new Uint8Array([5, 10, 15, 20]);
let additionalNumbers = [25, 30, 35, 40];

let combinedArray = [...mytypedArray, ...additionalNumbers];
let newTypedArrays = new Uint8Array(combinedArray);

console.log(newTypedArray); // Uint8Array(8) [5, 10, 15, 20, 25, 30, 35, 40]

// Membuat TypedArray 3 
let mytypedArray3 = [5];

let typedArray3 = new Uint8Array(mytypedArray3, 5); // 5 elements of type Int16

