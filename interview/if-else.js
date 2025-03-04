// let x = 0;
// let y = -1;
// let z = 4;
//  output 4 , 0 , -1
// output 9, 4, -1

// if (x > y && x > z) {
//   console.log(x, y, z);
// } else if (y > x && y > z) {
//   console.log(y, z, x);
// } else if (z > x && z > y) {
//   console.log(z, ",", x, ",", y);
// }

// var x = -2;
// var y = 45;
// var z = 0;
// //  output 4 , -1 , -2

// if (x > y && x > z) {
//   if (y > z) {
//     console.log(x + ", " + y + ", " + z);
//   } else {
//     console.log(x + ", " + z + ", " + y);
//   }
// } else if (y > x && y > z) {
//   if (x > z) {
//     console.log(y + ", " + x + ", " + z);
//   } else {
//     console.log(y + ", " + z + ", " + x);
//   }
// } else if (z > x && z > y) {
//   if (x > y) {
//     console.log(z + ", " + x + ", " + y);
//   } else {
//     console.log(z + ", " + y + ", " + x);
//   }
// }

let a = -5;
let b = -2;
let c = 45;
let d = 0;
let e = -1;
if (a > b && a > c && a > d && a > e) {
  console.log(a);
} else if (b > a && b > c && b > d && b > e) {
  console.log(b);
} else if (c > a && c > b && c > d && c > e) {
  console.log(c);
} else if (d > e && d > a && d > b && d > c) {
  console.log(d);
} else {
  console.log(e);
}
//  =====----====-====--==

for (var x = 0; x <= 15; x++) {
  if (x === 0) {
    console.log(x + " is even");
  } else if (x % 2 === 0) {
    console.log(x + " is even");
  } else {
    console.log(x + " is odd");
  }
}
// ???????
