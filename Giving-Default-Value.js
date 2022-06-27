
// Giving Default Value

// Object #1
const mhs = {
  nama: 'Ken Arok',
  umur: 35
}

// Destructuring Object #1 with additional value 
const { nama, umur, email = 'kenArok@default.com' } = mhs;

// Default Value
console.log(nama); // output: Ken Arok
console.log(umur); // output: 35

// Additional value
console.log(email); // output: kenArok@default.com

// Object #1 does not change after destructuring
console.log(mhs);
// Output:
// {
//  nama: "Ken Arok",
//  umur: 35
// }

// Object #2
const mhsa = {
  nama_a: 'Pari Kesit',
  umur_a: 27,
  email_a: 'pariKesit@contoh.com'
}

// Destructuring Object #2
const { nama_a, umur_a, email_a = 'pariKesit@default.com'} = mhsa; // trying to change default value of email_a

// Default Value
console.log(nama_a); // Pari Kesit
console.log(umur_a); // 27
console.log(email_a); // pariKesit@contoh.com (email_a is keeping its default value)

// Object #2 does not change after destructuring
console.log(mhsa);
// Output: 
// {
//  email_a: "pariKesit@contoh.com",
//  nama_a: "Pari Kesit",
//  umur_a: 27
// }


