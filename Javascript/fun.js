function firstNonRepeatingChar(str) {
  // Create a frequency map
  const frequencyMap = {};

  // Populate the frequency map
  for (let char of str) {
    frequencyMap[char] = (frequencyMap[char] || 0) + 1;
  }

  // Find the first non-repeating character
  for (let char of str) {
    if (frequencyMap[char] === 1) {
      return char;
    }
  }

  // If no non-repeating character is found, return null
  return null;
}

// Test cases
console.log(firstNonRepeatingChar("swiss")); // Output: "w"
console.log(firstNonRepeatingChar("hello")); // Output: "h"
console.log(firstNonRepeatingChar("aabbcc")); // Output: null
