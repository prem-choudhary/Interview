// const array = ["prem", 22, "pali"];

// let name = array[0];
// let age = array[1];
// let city = array[2];

// console.log(name)
// console.log(age)
// console.log(city)

// const array = ['prem' , 22, "city"]
// const Destructuring  = array
// console.log(Destructuring )

// let a = 5
// let b = 10
// console.log( a + (b * 2))

// let x = 5
// let y = 10
// console.log( x + y /2)

// what is pure function in js
// let count = 0;

// function incrementCounter() {
//     count += 1;
//     return count;
// }
//  console.log(incrementCounter())

function mostFrequentCharacter(str) {
  const charCount = {};

  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  let maxChar = "";
  let maxCount = 0;

  for (let char in charCount) {
    if (charCount[char] > maxCount) {
      maxChar = char;
      maxCount = charCount[char];
    }
  }

  return maxChar;
}

const str = "premmm";
console.log("The most frequent character is:", mostFrequentCharacter(str));

console.log("5" == "5"); // true (type coercion happens)
console.log("5" === "5"); // false (different types)

console.log("5" % 2);

// Synchronous
console.log("Start");
console.log("End"); // "End" will always log after "Start"

// Asynchronous
console.log("Start");
setTimeout(() => {
  console.log("Asynchronous operation");
}, 1000);
console.log("End"); // "End" logs before the asynchronous operation

async function fetchData() {
  try {
    let response = await fetch("https://api.example.com/data");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();
azzzz