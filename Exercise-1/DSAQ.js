function check_Palindrome(str_entry) {
  var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "");
  var ccount = 0;
  if (cstr === "") {
    console.log("Nothing found!");
    return false;
  }
  if (cstr.length % 2 === 0) {
    ccount = cstr.length / 2;
  } else {
    if (cstr.length === 1) {
      console.log("Entry is a palindrome.");
      return true;
    } else {
      ccount = (cstr.length - 1) / 2;
    }
  }
  for (var x = 0; x < ccount; x++) {
    if (cstr[x] != cstr.slice(-1 - x)[0]) {
      console.log("Entry is not a palindrome.");
      return false;
    }
  }
  console.log("The entry is a palindrome.");
  return true;
}
check_Palindrome("madam");
console.log(check_Palindrome("nursesrun"));

check_Palindrome("nursesrun");
check_Palindrome("fox");

function isPalindrome(str) {
  const len = str.length;

  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }

  return true;
}
const str1 = "madam";
const str2 = "nursesrun";
const str3 = "fox";

console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));
