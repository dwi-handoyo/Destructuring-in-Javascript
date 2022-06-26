

// Rest Parameter (...something)

const [e, f] = [1, 2, 3];
console.log(e); // 1
//console.log(g);  // Error

const [h, i, j] = [1, 2, 3, 4, 5];
console.log(h); // output: 1
console.log(j); // output: 3

const [k, ...values] = [1, 2, 3, 4, 5, 6];
console.log(k);  // output: 1
console.log(values); // output: [2, 3, 4, 5, 6] 

