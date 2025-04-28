// == equality operator

let x = 5;
let y = 5;
let z = 10;

x == y; // true, because 5 is equal to 5
x == z; // false, because 5 is not equal to 10
x == "5"; // true, because "5" is coerced to 5
10 == z; // true, because 10+5-4+1 equals 12, which is not equal to 10


// === strict equality operator

