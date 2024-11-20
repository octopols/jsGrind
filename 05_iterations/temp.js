// const myObject = {
//     gameID: 675467,
//     gameName: "Valorant",
//     gameType: "PvP Shooter"
// }

const { shoppingCart } = require("./shoppingCart");

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

const cartSum = shoppingCart.reduce( (acc, item) => 
                    acc + item.price, 0);
console.log(cartSum);
