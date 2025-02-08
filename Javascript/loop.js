//  array are store a multipale value

// let names = ["Prem", "mak"];
// let marks = ["prem", 77, "mak", 89];
// console.log(names [1]);
// console.log(marks[1]);

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let items = num.length
// console.log(num[items-1] )

let position = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(position.length);
// let index = position.length;
// console.log(position.length - 1);

let names = ["Prem", "Mak", "Kailash", "Bhinod", "Tomato", "Praveen"];
console.log(names);
names[4] = "KaluMadari";
console.log(names);
let addname = names.push("Rohit");
console.log(addname);
console.log(names);
console.log(names.length);
let removeArr = names.pop();
console.log(removeArr);
console.log(names);
console.log(names.length);

let heros = ["Hanumanji", "Bhaluballi", "Sakitiman", "Thor", "BhiBhiSan"];
console.log(heros[0]);
console.log(heros[1]);
console.log(heros[2]);
console.log(heros[3]);
console.log(heros[4]);
let delet = heros.pop();
console.log(delet);
console.log(heros);

function deleteElement(arr, ele) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == ele) {
      arr.splice(i, 1);
    }
  }
  return arr;
}
// var arr = [23, 56, 4, 78, 5, 63, 45, 210, 56];
// arr = deleteElement(arr, 56);

// console.log(arr);

//   5 time print 5 in one row

for (let i = 0; i < 5; i++) {
  // setTimeout(()=>console.log(i), 5000);// 5 5 5 5 5
}

const movie = ["Don", "Dhoom", "Krish"];
for (i = 0; i <= movie.length - 1; i++) {
  console.log(i + 1, ".", movie[i]);
}

const webSr = ["Mirzapur", "Farzi", "Bad Docter"];
console.log(webSr);
for (let i = 0; i <= webSr.length - 1; i++) {
  console.log(i + 1, ".", webSr[i]);
}

//convert given lower case letter into upper  case

let a = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let A = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let char = "a";

for ( let i = 0; i <= a.length - 1; i++) {
  if (char == a[i]) {
    console.log(A[i]);
  }
}

//find the average even number of array
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
sum = 0;
var count = 0;
for (i = 0; i <= num.length - 1; i++) {
  if (num[i] % 2 == 0) {
    sum = sum + num[i];
    count++;
  }
}
console.log(sum / count);
// task 1.  create an arry and print your 5 fav. show
const shows = [
  "The kapil sharma show",
  "Kbc",
  "taarka mehata ka ulta chasama",
  "big boos",
  "may i come in madama",
];
console.log(shows);

//  task 2..
//  create an array of vegetables
//  store  3 vegetables in array

const vegetables = ["Flower Vegetables", "Cauliflower", "Broccoli"];
console.log(vegetables);
console.log(vegetables[0]);
console.log(vegetables[1]);
console.log(vegetables[2]);
// for (let i = 0; i <= vegetables.length; i++) {
//   console.log(vegetables[i]);
// }

const veg = ["Flower Vegetables", "Cauliflower", "onion", "beans", "Tomato"];
let lastIndex = veg.length - 1;
console.log(veg[lastIndex]);
console.log(lastIndex);
// console.log(veg[2]);
//   one more opstion we can use

const items = ["phone", "leptop", "chargar", "headPhone", "ect"];
console.log(items[items.length - 1]);

// How to add element in an array
//  element is movies name

let movies = ["kgf", "laapta ledies", "saalar", "think tank"];
let addEl = movies.push("maharaja");
console.log(movies);

// create an array Superheros
// insetrt 3 superheros
// print each of them

// const superHeros = ["Hanuman ji ","Bhim", "Thor",]
// console.log(superHeros[0])
// console.log(superHeros[1])
// console.log(superHeros[2])

const superHeros = [];
superHeros.push("bhim");
superHeros.push("Haniman ji");
superHeros.push("Thor");

console.log("----------- before----------");

// console.log(superHeros[1]);
console.log(superHeros[0]);
console.log(superHeros[1]);
console.log(superHeros[2]);

console.log("------------- After--------");
superHeros[0] = "Msd";

// console.log(superHeros[1]);
console.log(superHeros[0]);
console.log(superHeros[1]);
console.log(superHeros[2]);

console.log("---------- ");

const el = [];
superHeros.push("bhim");
superHeros.push("Haniman ji");
superHeros.push("Thor");

for (let i = 0; i <= 3; i++) {
  console.log(superHeros[i]);
}

console.log("---===---====- web---===-----===----===");
//  create a movies array
// push 5 movies name
//  print using loop

let webMovies = [];
webMovies.push("Khoona ka badala");
webMovies.push("jaan ka dhusman");
webMovies.push("mirzapur");
webMovies.push("jaani dhoosman");
webMovies.push("Aakhari vaar");
//  one more way to push movies name in only one push methode
webMovies.push("RRR", "KGF", "KGF2", "Puspa", "Batman");
let lastIdx = webMovies.length - 1;
for (let i = 0; i <= lastIdx; i++) {
  console.log(webMovies[i]);
}
console.log("---------^^^^^^")

const arr = ["Bahuballi", "Spider Man", "IronMan", "Pushpa"];
const actors = ["prabhas", "tom Holland", "Robert Downey", "Allu Arajun"];
arr.push("Super Man");
actors.push("Henry Cavil");

let last = arr.length - 1;
for (let i = 0; i <= last; i++) {
  console.log(arr[i], "--", actors[i]);
}

