function lengthOfLongestSubstring(s) {
  let charSet = new Set(); // To store unique characters in the current window
  let left = 0; // Left pointer of the sliding window
  let maxLength = 0; // To store the maximum length of the substring

  for (let right = 0; right < s.length; right++) {
    // If the character is already in the set, move the left pointer
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left++;
    }
    // Add the current character to the set
    charSet.add(s[right]);
    // Update the maximum length
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

// Test the function
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbb")); // Output: 1
console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3
