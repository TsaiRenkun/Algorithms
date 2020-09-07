const { performance } = require('perf_hooks');

console.log("hello")


// Function to count sum of number from 1 to n
//loop O(n)
const sumLoop = (n) => {
    let total = 0 
    for (let i = 0; i <= n; i++) {
        total += i;
    }
    return total
}
//mathematics O(1)
const sumMathemtics = (n) => {
    return n * (n + 1) / 2
}

var t1 = performance.now();
// console.log(sumLoop(), "loop")
// console.log(sumMathemtics(), "Math")
var t2 = performance.now()
console.log(`time elapsed: ${t2 - t1/ 1000} seconds.`)

   