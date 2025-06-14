// function debounce(fn, delay) {
//   let timer;
//   return function (...args) {
//     clearTimeout(timer);
//     timer = setTimeout(() => fn.apply(this, args), delay);
//   };
// }

// function throttle(fn, delay) {
//   let lastCall = 0;
//   return function (...args) {
//     const now = new Date().getTime();
//     if (now - lastCall >= delay) {
//       lastCall = now;
//       fn.apply(this, args);
//     }
//   };
// }

// Throttle function
function throttle(fn, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall >= delay) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}

function logMessage() {
  console.log("Throttled:", new Date().toLocaleTimeString());
}

const throttledLog = throttle(logMessage, 2000); // 2 seconds

// Simulate rapid calls (every 500ms)
let interval = setInterval(throttledLog, 500);

// Stop after 10 seconds
setTimeout(() => clearInterval(interval), 10000);
