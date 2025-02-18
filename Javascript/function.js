let str = "prem Chaudhary"; // remove h from 2nd  str length
let jhola = ""; 

for (let i = 0; i < str.length; i++) {
  if (str[i] == "h" && i == 2) {
    continue;
  } else {
    jhola = jhola + str[i];
  }
}
console.log(jhola);

console.log("--------------");
const str2 = "masai school";
let res = "";

for (let i = 0; i < str2.length; i++) {
  res = res + str2[i];
}
console.log(res);

console.log("---------^^^-------");

// count the names which is starts from A

const arr = ["Amit", "Sumit", "Anant", "Arati", "Deepak"]; // output is 3
count = 0;

for (let i = 0; i < arr.length; i++) {
  //   if (i == "A") {
  //     count = count + arr[i];
  //   }
  let x = arr[i];
  console.log(x[0]); // print all the frist character latter is printing got it prem ???
  if (x[0] == "A") {
    count++;
  }
}
console.log(count);

//  count the names which is contains A
console.log("^^^^^_______^^^^^^_____");

const moviesNames = ["Aag ka GOla", "Khoon ka Badala", "Loki"];
// O/P  is 2
let add = 0;

for (let i = 0; i < moviesNames.length; i++) {
  let res = moviesNames[i];

  console.log(res); // print all movies names

  for (let k = 0; k < res.length; k++) {
    if (res[k] == "A" || res[k] == "a") {
      add++;
      break;
    }
  }
  //   break;
}
console.log(add);

console.log("------------***********-------------");

// givin a string count the number of words in  that string..

const tagline = "Prem choudhary"; // output is 2 and 1 speac is here
let Bag = 0;

if (tagline.length > 0) {
  for (let i = 0; i < tagline.length; i++) {
    if (tagline[i] == " ") {
      Bag++;
    }
  }

  let words = Bag + 1;
  console.log(" Words", words);
} else {
  console.log("words", 0);
}
console.log("words", Bag);

let words = Bag + 1;
console.log(" Words", words);

//  LowerCase to UpperCase

let feels = " i'm feeling sad";

let lowers = "abcdefghijklmnopqrstuvwxyz";
let uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
conword = "";
for (let i = 0; i < feels.length; i++) {
  let char = feels[i];
  if (char == " ") {
    conword = conword + " ";
  }
  for (let j = 0; j <= lowers.length; j++) {
    if (char == lowers[j]) {
      conword = conword + uppers[j];
    }
  }
}
console.log(conword);

// upper to lower
let feel = "I'M FEELING  HAPPY ";

let lower = "abcdefghijklmnopqrstuvwxyz";
let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
conword = "";
for (let i = 0; i < feel.length; i++) {
  let char = feel[i];
  if (char == " ") {
    conword = conword + " ";
  }
  for (let j = 0; j <= upper.length; j++) {
    if (char == upper[j]) {
      conword = conword + lower[j];
    }
  }
}
console.log(conword);

const name = "prem choudhary";
console.log("........");
const age = 21;
console.log(`my name is ${name} and i'm old ${age} year `);

const mode =
  "The Lydian mode is a music mode that has been used in a variety of music genres, from classical to jazz and popular music";
("This mode is characterized by its bright and happy sound, which is often described as being playful, joyful, and uplifting.");


console.log(`${mode}`);
