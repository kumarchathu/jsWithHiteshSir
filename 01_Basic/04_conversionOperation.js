// let score = "2552";  //2552
// let score = "2552abc"; // NaN
let score = ""; // NaN
// let score = true; // 1
// let score = false; // 0
// let score = null; // 0 <= this is also zero
// let score; // NaN

// console.log(typeof score);


// any type to number conversion
// ------------------------------------
let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

/*summary of any type to number
--------------------------------
"2552"      => 2552
"2552abc"   => NaN(Not a Number)
""          => 0
true        => 1 
false       => 0 
null        => 0
undefined   => NaN 
*/


//-----------any type to number conversion -------------------------
// let isLoggedIn = "rama"; //true
// let isLoggedIn = ""; //false
// let isLoggedIn = "123"; //true
// let isLoggedIn = "1"; //true
// let isLoggedIn = "0"; //true
// let isLoggedIn = 1; //true
// let isLoggedIn = 0; //false
// let isLoggedIn; //false
let isLoggedIn = null; //false

// console.log(typeof isLoggedIn);

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(typeof booleanIsLoggedIn);
// console.log(booleanIsLoggedIn);

/*summary of any type to number
--------------------------------
"rama"      => true
""          => false
"123"       => true
"1"         => true
"0"         => true
1           => true
0           => false
null        => false
undefined   => false 
*/

// let someNumber = 33; // 33
// let someNumber = "33abc"; // 33abc
// let someNumber = "";//  blank 
// let someNumber = 0; // 0
// let someNumber = 1; // 1
// let someNumber = true; //true
// let someNumber = false; //false
// let someNumber = null; //null
let someNumber; // undefined

console.log(typeof someNumber);
let stringNumber = String(someNumber);
console.log(typeof stringNumber);
console.log(stringNumber);