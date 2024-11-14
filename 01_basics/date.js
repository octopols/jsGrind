// let myDate = new Date();

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0, 23);
// myCreatedDate = new Date("2023-1-24");
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now();

console.log(myTimeStamp);
console.log(myCreatedDate.toLocaleString('en-IN'));

console.log(myCreatedDate.getTime());