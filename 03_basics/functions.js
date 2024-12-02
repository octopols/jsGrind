// A normal function declaration
function hello(string) {
  console.log(`Hello, ${string}`);
}
// - Function declarations are hoisted, so you can call `hello()` even before this line in your code.
// - This function uses a clear and simple name, which is great for readability and debugging.

// A function assigned to a variable (function expression)
const weirdFunction = function helloUwU(string) {
  console.log(`hellowie ooni chan ${string}`);
};
// - Function expressions are not hoisted, so you must define `weirdFunction` before calling it.
// - This function has a name (`helloUwU`), which can be used:
//   1. For debugging (it shows up as `helloUwU` in the stack trace).
//   2. For recursion or internal calls if needed (though it's not used for recursion here).

// Example of recursion using a named function expression
const a = function randomPatani(n) {
  if (n > 0) {
    console.log(n);
    randomPatani(n - 1); // Recursive call using the function's own name
  }
};
a(5); // Outputs: 5, 4, 3, 2, 1
// - `randomPatani` is a name internal to the function. It allows the function to call itself recursively,
//   even if the variable `a` is reassigned or removed.

// Function expression without a name
const helloWorld = function (string) {
  console.log(`Hello world, ${string}`);
};
// - This is an anonymous function assigned to `helloWorld`.
// - It cannot call itself recursively because it lacks a name.
// - It won’t show a descriptive name in the debugger stack trace, appearing as just `helloWorld`.

// Why use an arrow function?
const helloWorldButBetter = () => {
  console.log(`Hello World!`);
};
// - Arrow functions are shorter and more concise.
// - They don’t have their own `this` or `arguments` objects, inheriting `this` from the enclosing scope.
// - They are not suitable for recursion or when a dynamic `this` context is needed.
// - Best used for simple functions, especially callbacks or functional programming patterns.

// General Notes:
// - Use function declarations for top-level logic, hoisting, and dynamic `this` behavior.
// - Use named function expressions for recursion or debugging purposes.
// - Use anonymous function expressions for one-off, non-recursive logic.
// - Use arrow functions for concise syntax, especially in callbacks or when context inheritance is required.

const obj = {
  message: "Hello, world!",
  print: function () {
    console.log(this.message); // Works: "Hello, world!"
  },
  printArrow: () => {
    console.log(this.message); // Undefined: `this` refers to the outer scope.
  },
};
obj.print(); // "Hello, world!"
obj.printArrow(); // Undefined

function sayMyName() {
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

function addTwoNumbers(number1, number2) {
  // let result = number1 + number2
  // return result
  return number1 + number2;
}

const result = addTwoNumbers(3, 5);

// console.log("Result: ", result);

function loginUserMessage(username = "sam") {
  if (!username) {
    console.log("PLease enter a username");
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
  username: "hitesh",
  prices: 199,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

// handleObject(user)
handleObject({
  username: "sam",
  price: 399,
});

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
