
// Destructuring Object by Implementing Function "Return"

// Agar urutan tambah, kurang, kali, dan bagi tidak harus sama dengan urutan pada function, maka gunakan Destructuring Object

function kalkulasi(a, b) {
 return{                     // return gunakan {} utk object
 tambah: a + b,
 kurang: a - b,
 kali: a * b,
 bagi: a / b
 }
}

const {bagi, tambah, kali, kurang} = kalkulasi (2, 3); // urutan tidak pengaruh

console.log(bagi);         // output: 0.6666666666666666
console.log(kurang);       // output: -1
console.log(tambah);       // output: 5

