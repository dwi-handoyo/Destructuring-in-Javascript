// Giving Default Value and Assign New Variable

// Object:
const mhs = {
  nama_mhs: 'Bala Dewa',
  umur_mhs: 34,
  email_mhs: 'baladewa@kupas.com'
}

// Destructuring:
const { nama_mhs : na, umur_mhs: um, email: em = 'email@default.com' } = mhs;

// New Variable:
console.log(em); // output: email@default.com

// Destructured:
console.log(um); // output: 34
console.log(na); // output: Bala Dewa

// Not destructured:
console.log(mhs.email_mhs); // output: baladewa@kupas.com

// Destructured object does not change from the original:
console.log(mhs);
// output: 
// {
//  email_mhs: "baladewa@kupas.com",
//  nama_mhs: "Bala Dewa",
//  umur_mhs: 34
// }
