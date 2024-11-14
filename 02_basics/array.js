// const arr = [1, 2, 3, 4, true, "harsh"];
// console.log(arr[0]);
// console.log(arr[arr.length - 1]);

// const arr2 = new Array("a", "b", "c", "d");
// console.log(arr2[2]);
// arr.push(6);

// arr.unshift(5);
// console.log(arr);

// arr.shift();
// console.log(arr);

// console.log(arr.includes(1));
// console.log(arr.includes(50));
// console.log(arr.indexOf(9));
// console.log(arr.indexOf(2));

const newArrA = [1, 2, 3, 4, 5];
console.log(newArrA);

const newArrB = newArrA.slice(0, 3);

console.log("A ", newArrA);
console.log("B ", newArrB);

const newArrC = newArrA.splice(0, 3);

console.log("A ", newArrA);
console.log("C ", newArrC);