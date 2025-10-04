for (let i = 1; i <= 5; i++) {
  let row = "     ";
  for (let j = 1; j <= 9; j++) {
    if (j === 6 - i || (i === 3 && j >= 3 && j <= 7) || j === 4 + i) {
      row += "+";
    } else {
      row += " ";
    }
  }
  console.log(row);
    
}
// Output:
/*

    +    
   + +   
  +++++
 +     +
+       +    


         +    
        + +   
       +++++
      +     +
     +       +
        
 
*/
// NEW Pattern
// 

function printPattern(n) {
  let pattern = "";

  // Upper part
  for (let i = Math.floor(n / 2); i <= n; i += 2) {
    // Left spaces
    for (let j = 1; j < n - i; j += 2) {
      pattern += " ";
    }
    // Left stars
    for (let j = 1; j <= i; j++) {
      pattern += "*";
    }
    // Middle spaces
    for (let j = 1; j <= n - i; j++) {
      pattern += " ";
    }
    // Right stars
    for (let j = 1; j <= i; j++) {
      pattern += "*";
    }
    pattern += "\n";
  }

  // Lower part
  for (let i = n; i >= 1; i--) {
    // Left spaces
    for (let j = i; j < n; j++) {
      pattern += " ";
    }
    // Stars
    for (let j = 1; j <= (i * 2) - 1; j++) {
      pattern += "*";
    }
    pattern += "\n";
  }

  console.log(pattern);
}

// Run with n = 6
printPattern(6);
