// const arr = [1, 2, 3, 4, true, "harsh"];
// console.log(arr[0]);
// console.log(arr[arr.length - 1]);

// const arr2 = new Array("a", "b", "c", "d");
// console.log(arr2[2]);
// arr.push(6);

// arr.unshift(5); 
//adds 5 at front

// console.log(arr);

// arr.shift();
// removes the first element of the arr
// console.log(arr);

// console.log(arr.includes(1));
// console.log(arr.includes(50));
// console.log(arr.indexOf(9));
// console.log(arr.indexOf(2));

const newArrA = [1, 2, 3, 4, 5];
console.log(newArrA);

const newArrB = newArrA.slice(0, 3);
// does not change the original array and returns 3 element from 0th index of A

console.log("A ", newArrA);
console.log("B ", newArrB);

const newArrC = newArrA.splice(0, 3); 
// removes 3 element from 0th index of A and returns them

console.log("A ", newArrA);
console.log("C ", newArrC);

const a = Array.of(5);        // [5] - an array with one element, 5
const b = Array.of(1, 2, 3);  // [1, 2, 3] - an array with three elements, 1, 2, and 3

const c = new Array(5);       // Creates an array with 5 empty slots, not [5]
const d = new Array(1, 2, 3); // [1, 2, 3] - an array with three elements, 1, 2, and 3

// we use const in arrays and still modify it's content because a is a pointer pointing to the 
// memory location of the array we can change whats in that memory but not where its pointing to with const

let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];

arr1 = arr2; 

// what will happen to the memory of [1, 2, 3, 4]?
// it gets freed by js garbage collector once its detected


// and can i do this?

const arr3 = [1, 2, 3, 4];
const arr4 = [5, 6, 7, 8];

// arr3 = arr4; 
// throws an error TypeError: Assignment to constant variable.
