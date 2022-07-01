
// Rest Parameter in Array (...something)

// Destructuring Array #1 
const [e, f] = [1, 2, 3];
console.log(e); // output: 1
//console.log(g);  // output: Error

// Destructuring Array #2
const [h, i, j] = [1, 2, 3, 4, 5];
console.log(h); // output: 1
console.log(j); // output: 3

// Destructuring Array #3
const [k, ...values] = [1, 2, 3, 4, 5, 6];
console.log(k);  // output: 1
console.log(values); // output: [2, 3, 4, 5, 6] 

const [a, b, c, ...rest] = [3,2,5,4,1,4,7,8,9];
console.log(a); // output: 3
console.log(b); // output: 2
console.log(c); // output: 5
console.log(rest); // output: [4,1,4,7,8,9]


