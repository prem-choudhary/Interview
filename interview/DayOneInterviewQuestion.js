// JavaScript program to check if the given
// number is a palindrome

// Function to check if the number is palindrome
function isPalindrome(n) {
  let reverse = 0;

  // Copy of the original number so that the original
  // number remains unchanged while finding the reverse
  let temp = Math.abs(n);
  while (temp != 0) {
    reverse = reverse * 10 + (temp % 10);
    temp = Math.floor(temp / 10);
    console.log(temp);
  }

  // If reverse is equal to the original number, the
  // number is palindrome
  return reverse === Math.abs(n);
}

let n = 12321;
if (isPalindrome(n) === true) {
  console.log("Yes");
} else {
  console.log("No");
}
