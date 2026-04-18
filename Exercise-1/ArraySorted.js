class Solution {
  // Function to find the single non-duplicate element
  singleNonDuplicate(arr) {
    const n = arr.length;

    // Edge cases
    if (n === 1) return arr[0];
    if (arr[0] !== arr[1]) return arr[0];
    if (arr[n - 1] !== arr[n - 2]) return arr[n - 1];

    let low = 1;
    let high = n - 2;
  }
}
