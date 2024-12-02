// callbacks
// oldest, less clean and leads to callback hell

// Functions can accept other functions as parameters and execute them when done.

function fetchData(callback) {
  console.log("Fetching Data");

  // async task
  setTimeout(function () {
    callback("Fetched behavsiour data");
  }, 1000);
}

// indicator: if an async task is completed
fetchData((data) => {
  console.log(data);
});

console.log("This runs while waiting for data.");

//Promise

let fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Data fetched");
    resolve("Fetched data");
  }, 2000);
});

fetchData
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

console.log("This runs while waiting for data.");

let fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Data fetched");
    resolve("Fetched data");
  }, 2000);
});

fetchData
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

console.log("This runs while waiting for data.");

// Promise
let fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Data fetched");
    resolve("Fetched data");
  }, 2000);
});

fetchData
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

console.log("This runs while waiting for data.");

// async await

async function fetchData() {
  let data = await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data fetched");
      resolve("Fetched data");
    }, 2000);
  });
  console.log(data);
}

fetchData();
console.log("This runs while waiting for data.");
