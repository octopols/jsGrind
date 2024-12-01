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
// function performTask(callback) {
//     console.log("Task started!");
//     callback(); // Call the provided callback function
// }
// Define a simple callback function
// function taskDone() {
//     console.log("Task completed!");
// }
// Pass the callback to the main function
// performTask(taskDone);
// reduce is used to reduce the array to some value with
// some logic
// const shoppingCart = [1, 2, 3, 4, 5, 6];
// const sum = shoppingCart.reduce( (sum, index) => sum + index, 0 );
// console.log(sum);
export const shoppingCart = [
  {
    itemName: "js-course",
    price: 299,
  },
  {
    itemName: "android-course",
    price: 500,
  },
  {
    itemName: "ai-course",
    price: 600,
  },
];
