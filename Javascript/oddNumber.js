function CountingEvenOdd(arr) {
  let even_count = 0;
  let odd_count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even_count++;
    } else {
      odd_count++;
    }
  }

  console.log("Number of even elements = " + even_count);
  console.log("Number of odd elements = " + odd_count);
}

let arr = [2, 3, 4, 5, 6 ,7 ,8 ,9 ,10];

CountingEvenOdd(arr);
