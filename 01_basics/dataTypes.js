let name = "Harsh"
let age = "23"
let isLoggedIn = "false"
let state = null

//primative
// number =< 2^53
// bigint
// string " "
// boolean -> true / false
// null -> standalone value
// undefined undifined
// symbols 

console.log((Symbol('id')) == Symbol('id'));

// Non-Primitive Data Types 
// mutable

// objects
// arrays
  // arrays are objects
// functions

console.log(typeof null); // returns object 
console.log(typeof undefined); // returns undefined

// Additional Types
// date its still an object
let myCreatedDate = new Date(2023, 0, 23)
console.log(typeof myCreatedDate);

// error
//error is still an object
const error = new Error("Something went wrong!");
console.log(error.name); // "Error"
console.log(error.message); // "Something went wrong!"
console.log(typeof error);