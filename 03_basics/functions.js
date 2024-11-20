// self notes
// a normal function
function hello(string) {
    console.log(`Hello, ${string}`);
}
// you can also hold a function in a variable to maybe assign it another variable? 
// the function name helloUwU seems useless but it can be used -
// 1. it will show helloUwU in the debugger stack 
// 2. it will help in recursive calls
const weirdFunction = function helloUwU(string) {
    console.log(`hellowie ooni chan ${string}`);
}

// example for recursive calls
const a = function randomPatani(n) {
    if (n > 0) {
        console.log(n);
        randomPatani(n - 1); // Recursive call
    }
};

// BTW WE CAN ALSO NOT NAME THE FUNCTION INSIDE IF WE ARE ASSIGNING IT TO A VARIABLE
const helloWorld = function(string) {
    console.log(`Hello world, ${string}`);
}

// but why not just use an arrow function atp?

const helloWorldButBetter = () => {
    console.log(`Hello World!`);
}

// If your function doesn’t need its own this or arguments, and isn't recursive or 
// named for clarity/debugging, arrow functions are usually the better choice. However, 
// traditional functions still have their place in situations requiring dynamic this or richer context.

const obj = {
    message: "Hello, world!",
    print: function () {
        console.log(this.message); // Works: "Hello, world!"
    },
    printArrow: () => {
        console.log(this.message); // Undefined: `this` refers to the outer scope.
    }
};
obj.print();        // "Hello, world!"
obj.printArrow();   // Undefined


function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));