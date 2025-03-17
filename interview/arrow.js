function mergeSortedArrays(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}

console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // Output: [1, 2, 3, 4, 5, 6]

function findLargestNumber(arr) {
  return Math.max(...arr);
}

console.log(findLargestNumber([1, 5, 3, 9, 2])); // Output: 9

function findMissingNumber(nums) {
    const n = nums.length; 
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = nums.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
  }
  
  console.log(findMissingNumber([3, 0, 1])); // Output: 2