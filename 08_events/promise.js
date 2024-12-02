// A Promise is an object that represents the eventual success or failure of an asynchronous operation.
// It helps us manage asynchronous tasks by tracking their state (pending, fulfilled, or rejected).

// If the asynchronous task completes successfully, we call resolve to fulfill the Promise.
// If the asynchronous task encounters an error or fails, we call reject to reject the Promise.

// resolve and reject are callback functions provided by the Promise constructor.
// They are used to handle the success (resolve) or failure (reject) of the operation.
// These functions are necessary to finalize the Promise and transition it out of the "pending" state.

// The finally block is executed after the Promise is settled (either fulfilled or rejected).
// Example:
// resolve -> .then -> .finally
// reject -> .catch -> .finally

console.log("Promise state: pending");

new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      const user = {
        name: "harsh",
        lastName: "bhaskar",
        username: "octopols",
        age: 23,
      };
      console.log("Promise state: fulfilled");
      resolve(user); // Transition to "fulfilled"
    } else {
      console.log("Promise state: rejected");
      reject("ITS FUCKED UP BRO"); // Transition to "rejected"
    }
  }, 1000);
})
  .then((user) => {
    console.log("Handling fulfilled state:", user);
    return user;
  })
  .then((user) => {
    console.log("Accessing user name:", user.name);
  })
  .catch((error) => {
    console.log("Handling rejected state:", error);
  })
  .finally(() => {
    console.log("Promise state: complete (either fulfilled or rejected)");
  });
