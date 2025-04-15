// function isPowerOfTwo(n){
//     if(n==0){
//             return false
//             else{
//                 while(n%2==0){
//                     n=n/2
//                 }
//             }
//             if(n==1){
//                 return true
//                 else{
//                     return false
//                 }
//             }
//     }
// }
function isPowerOfTwo(n) {
  if (n == 0) {
    return false;
  } else {
    while (n % 2 == 0) {
      n = n / 2;
    }

    
  }

  if (n == 1) {
    return true;
  } else {
    return false;
  }
}

console.log(isPowerOfTwo(8));  // true
console.log(isPowerOfTwo(10)); // false
