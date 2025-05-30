function reverseArray(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    // Swap
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    // Move pointers
    start++;
    end--;
  }

  return arr;
}

// Test it
console.log(reverseArray([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]
