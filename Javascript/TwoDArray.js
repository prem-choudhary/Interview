const arr = [
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  [
    [10, 11, 12],
    [13, 14, 15],
    [16, 17, 18],
  ],
  [
    [19, 20, 21],
    [22, 23, 34],
    [35, 36, 37],
  ],
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    for (let k = 0; k < arr[i][j].length; k++) {
      console.log(arr[i][j][k]);
    }
  }
}

//  1, 2, 3
//  4, 5, 6
//  7, 8, 9

// output is 741852963

//

const arr1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const rows = arr1.length;
const cols = arr1[0].length;

let bag = "";
for (let j = cols - 1; j >= 0; j++) {
  for (let i = 0; i < rows.length; i++) {
    bag = bag + arr1[i][j];
  }
}
console.log(bag);
