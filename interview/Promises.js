const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true; // Simulate success or failure
    if (success) {
      resolve("Data fetched successfully!"); // Fulfill the promise
    } else {
      reject("Failed to fetch data!"); // Reject the promise
    }
  }, 2000); // Simulate a 2-second delay
});

const promise1 = Promise.reject("Error 1");
const promise2 = new Promise((resolve) => setTimeout(resolve, 1000, "Success"));

Promise.any([promise1, promise2])
  .then((result) => {
    console.log(result); // "Success"
  })
  .catch((error) => {
    console.error(error); // AggregateError if all promises are rejected
  });

async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data); // Array of users
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();
