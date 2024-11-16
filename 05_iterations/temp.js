// const myObject = {
//     gameID: 675467,
//     gameName: "Valorant",
//     gameType: "PvP Shooter"
// }

// for (const element in myObject) {
//     console.log(element);

//     // this is static and wont work
//     // console.log(myObject.element); 
//     console.log(myObject[element])
// }

// const map = new Map()
// map.set("IN", "India")
// map.set("USA", "United States of America")
// map.set("FR", "France")

// for (const [key, value] of map) {
//     console.log(`${key} the value is ${value}`)
// }
// for (const element of map) {
//     console.log(element);
// }
// console.log(" ")
// for (const element in map) {
//     console.log(element);
// }
// console.log(" ");
// console.log(" ");
// console.log(" ");

const arr = [1, 2, 3, 4, 5];

// for (const element of arr) {
//     console.log(element);
// }

// console.log(" ");

// for (const element in arr) {
//     console.log(element);
// }

// this does not return anything 
//const ans1 = arr.forEach( (item) => console.log(item) );
//executes a function for every element in an array
// arr.forEach( (item) => console.log(item) );

//filter returns values and can also execute
// const ans = arr.filter( (item) => item > arr.length - 3 );
// const ans = arr.filter( (item) => console.log(item));
// console.log(ans);

// console.log(ans);

// callback function
// Define a function that takes another function as a callback
function performTask(callback) {
    console.log("Task started!");
    callback(); // Call the provided callback function
}

// Define a simple callback function
function taskDone() {
    console.log("Task completed!");
}

// Pass the callback to the main function
performTask(taskDone);