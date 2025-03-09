// function debounce(func, delay) {
//   let timeoutId;
//   return function (...args) {
//     clearTimeout(timeoutId);
//     timeoutId = setTimeout(() => func.apply(this, args), delay);
//   };
// }

// // Example usage
// const debouncedLog = debounce(() => console.log("Debounced!"), 1000);
//  window.addEventListener("resize", debouncedLog);

console.log(1 + -"1" + "1" + 1);

// Debounce function
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId); // Clear the previous timeout
    timeoutId = setTimeout(() => func.apply(this, args), delay); // Set a new timeout
  };
}

// Function to be called on resize
function onResize() {
  console.log("Window resized!");
}

// Create a debounced version of the onResize function
const debouncedLog = debounce(onResize, 1000); // 1000ms (1 second) delay

// Attach the debounced function to the window's resize event
// window.addEventListener("resize", debouncedLog);

console.log("Hello World")