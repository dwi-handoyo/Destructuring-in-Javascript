
// Rest Parameter in Object

// Object
const mhs = {
  nama: 'Punta Dewa',
  umur: 37,
  email: 'puntaDewa@emails.com'
}

// Destructuring Object with Rest Parameter
const { nama, ...value } = mhs;

// Default value:
console.log(nama); // output: Punta Dewa

// Rest Parameter value
console.log(value);
// Output: 
// {
//  email: "puntaDewa@emails.com",
//  umur: 37
// }

// Object does not change after destructuring
console.log(mhs);
// Output:
// {
//  email: "puntaDewa@emails.com",
//  nama: "Punta Dewa",
//  umur: 37
// }


