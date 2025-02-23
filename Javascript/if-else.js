if (2 <= 2) {
  console.log("Hello js user");
}
if (5 % 2 === 0) {
  console.log("Hello Java user");
} else console.log("Hello js user");

const arr = [1, 2, 3, 4, 5, 67, 8, 9, 19];

for (let i = 1; i < arr.length; i++) {
  console.log(`this is for loop ${i}`);
}

// let a = 5;
// let b = 2;
// let c = a + b;
// console.log(`a is = ${a} and b is = ${b}`);
// console.log("a + b = ", a + b);
// console.log("a - b = ", a - b);
// console.log("a * b = ", a * b);
// console.log("a / b = ", a / b);
// console.log("a % b = ", a % b);
// console.log("a ** b = ", a ** b);

//  Unary Operatrs

// let a = 5;
// let b = 2;
// console.log(`a is = ${a} and b is = ${b}`);
// // a =a+1
// // a += 1;
// // a++
// // ++a
// --a;
// console.log("a = ", a--); // output 6
// console.log(a);

//  assign opert

// let a = 5;
// let b = 2;

// // a + = 4;
// a = a + 4;
// console.log(`a is = ${a}`); // output is 9

// // b = b*2
// // b *= 4;
// b **= 4;
// console.log(`B is = ${b}`); // output is 8

// a /= 4;
// console.log(`a is = ${a}`);

// b %= 3;
// console.log(`B is = ${b}`);

// Comparison operators    value is true and false
//  =  ==  ===   !=     !==

// let x = 10;
// let y = 20;

// console.log(" x == y is =", x == y); //  false
// console.log(" x === y is =", x === y); // false
// console.log(" x != y is =", x != y); // true
// console.log(" x !== y is =", x !== y); // true

// console.log(" x < y is =", x < y); // true
// console.log(" x > y is =", x > y); //  false
// console.log(" x <= y is =", x <= y); // ture
// console.log(" x >= y is =", x >= y); // false

// let a = 10;
// let b = "10";

// // console.log("x === y is  = ", a === b);
// console.log("x !== y is  = ", a !== b); //  true

// console.log(" x < y is =", x < y); // true
// console.log(" x > y is =", x > y); //  false
// console.log(" x <= y is =", x <= y); // ture
// console.log(" x >= y is =", x >= y); // false

// logical operators  ( && ... || .... ! )

let x = 10;
let y = 20;

let cond1 = x < y; // ture
let cond2 = y < x; // ture
console.log("cond1 && cond2 = ", !(cond1 && cond2)); // ture
console.log("cond1 || cond2 = ", cond1 || cond2); // true
console.log("cond1 ! cond2 = ", !(cond1, cond2)); // true

let a = 10;
let b = 20;
console.log("a > b is = to  ", !(a === b)); //false

//  if statements in js

let mode = "dark";
let color;
if (mode === "dark") {
  color = "black";
} else {
  color = "white";
}
console.log(`is mood dark then color is -> ${color}`);

let themes = "Apple themes";

if (themes === "mi themes") {
  console.log("chii sasur");
} else if (themes === "Apple themes") {
  console.log("Woh i like this Apple-> themes");
} else if (themes === "Nokia") {
  console.log("Yeh toh tatti hai ");
}

let voterAge = 25;

if (voterAge >= 18) {
  console.log("You can Vote ");
}
if (voterAge <= 17) {
  console.log("You canNot vote ");
}

// let num = 20;
// for (let i = 1; i < num; i++) {
//   if (i % 2 === 0) {
//     console.log(`even number is = ${i}`);
//   }
// }

//  switch statement

let day = 4;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  default:
    dayName = "seturday";
}

console.log(`Today is ${dayName}`);

//  print  greater numbre

// let num1 = 56;
let num2 = 70;

if (num1 > num2) {
  console.log(`num1 is greater then num2 ${num1}`);
} else console.log(`num2 is greater then num1 ${num2}`);

let score = 100;
let grade;

if (score >= 90) {
  grade = "A";
} else if (score >= 70) {
  grade = "B";
} else if (score >= 60) {
  grade = "C";
} else if (score >= 50) {
  grade = "D";
} else if (score >= 33) {
  grade = "E";
} else if (score >= 0) {
  grade = "Fall";
}
console.log(
  `dear student grade is accoding to your score & your grade  =  ${grade}`
);

//  print price ticket

let age = 25;

let ticketPrice;

if (age < 12) {
  ticketPrice = 5;
} else if (age <= 12 && age < 18) {
  ticketPrice = 10;
} else if (age >= 18 && age < 60) {
  ticketPrice = 20;
} else {
  ticketPrice = 15;
}
console.log("Ticket Price: $" + ticketPrice);

// print leap year

let year = 2027;

if (year % 2 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
  console.log(`${year} is leap year. `);
} else {
  console.log(`${year} is not a leap year.`);
}

const reverseFunction = (str) => {
  return str.split("").reverse().join("");
};
console.log(reverseFunction("123"));

// let arr = [-0 , -3, -4, -2, -5, 0]
// if(arr<=0){
//   console.log()
// }

a = -5;
b = -2;
c = 6;
d = 0.1;
f = -1;

if (a > b && a > v && a > d && a > f) {
  console.log(a);
} else if (b > a && b > c && b > d && b > f) {
  console.log(b);
} else if (c > a && c > b && c > d && c > f) {
  console.log(c);
} else if (d > a && d > b && d > c && d > f) {
  console.log(d);
} else console.log(f);

let p = 3;
let q = -7;
let w = 2;

// output is the sigh is +

if (p > q && p > w) {
  console.log("The sigh is +");
} else if (q > p && q > w) {
  console.log("The sigh is not");
} else console.log("not sigh not defined");

//   print number 1 to 10

for (let i = 1; i <= 10; i++) {
  console.log(i);
}
console.log("-----------5 * table----------- ");
//  print multi.. table of 5 useing for loop

for (let i = 1; i <= 10; i++) {
  console.log(i * 5);
}

console.log("-------***--------");

let start = 0;
let end = 10;
let sum = 0;
while (start <= end) {
  if (start % 1 == 0) {
    sum = sum + start;
  }
  start++;
}
console.log(sum);

console.log("------***-------");
// print number 10 to 1 useing for loop
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

console.log("------***------");

//  do while loop print number one to five in one line
let res = " ";
let i = 0;
do {
  i = i + 1;
  res = res + i;
} while (i < 5);
console.log(res);

//  print the pattern
/*
  
  *
  * *
  * * *
  * * * *
  * * * * *
  
  */
console.log("===**====");

for (let i = 1; i <= 5; i++) {
  let bag = " ";
  for (j = 1; j <= i; j++) {
    bag = bag + "* ";
  }
  console.log(bag);
}
console.log("===**====");

// print number 1 to 10 useing for loop and  useing 5 contiune statement
for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    continue; // 5 is skip
  }
  console.log(i);
}

// print number 1 to 10 useing for loop and useing 7 break  statement
console.log("===***====");

for (let i = 1; i <= 10; i++) {
  if (i == 7) {
    break;
  }
  console.log(i);
}

// write a program to calculate the factorial number of a using a while loop
console.log("------");

// let number = 10;
let result = 1;
let counter = number;

while (counter > 1) {
  result *= counter;
  counter--;
}

console.log(`The factorial of ${number} is ${result}`);

// let num = 10;
for (let i = 1; i <= num; i++) {
  console.log(i * 2);
}

//
// check is number is prime or not
// let number = 10;
// let isPrime = 0;

// for (let i = 1; i <= number; i++) {
//   if (number % i == 0) {
//     isPrime++;
//   }
// }
// if (isPrime == 2) {
//   console.log(number, "it is prime number");
// } else {
//   console.log(number, "not prime number");
// }

// print all prime number is 2 to 100

for (let num = 2; num <= 100; num++) {
  let isPrime = 0;

  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      isPrime++;
    }
  }
  if (isPrime == 2) {
    console.log(num, "it is prime number");
  } else {
    console.log(num, "not prime number");
  }
}

// function mulTableN(num) {
//   for (let i = 1; i <= 10; i++) {
//     console.log(i * num);
//   }
// }

// mulTableN(3)

// const ahead = (num) => {
//   for (let i = 1; i <= num; i++) {
//     if (i % 2 == 1) {
//       console.log(i);
//     }
//   }
// };
// ahead(12);

// let num = 10
// for(let i = 1; i<=num; i++){
//     if (i%2 === 0) {
//         console.log(i)
//     }
// }

//  same  even below N
let num1 = 5;
sum = 0;
for (let i = 1; i <= num1; i++) {
  if (i % 2 == 0) {
    sum = sum + i;
  }
}
console.log(sum);

//  same odd below N

let num = 5;
sum = 0;
for (let i = 1; i <= num; i++) {
  if (i % 2 == 1) {
    sum = sum + i;
  }
}
console.log(sum);

//  mod of 10
let number = 7;
for (let i = 1; i <= number; i++) {
  console.log(i % 10);
}
