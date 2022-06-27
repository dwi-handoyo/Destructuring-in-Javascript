
// Destructuring Object - by using {}

const mhs = {
  nama: 'Godam Best',
  umur: 23
}

// console.log without object destructuring
console.log(mhs.nama); // output: Godam Best
console.log(mhs.umur); // output: 23

// console.log with object destructuring:
const {nama, umur} = mhs;
console.log(nama); // output: Godam Best
console.log(umur); // output: 23

// Destructuring Nested Object

// Nested Object
const hero = {
  name: 'Batman',
  realName: 'Bruce Wayne',
  address: {
    city: 'Gotham'
  }
};

// Object destructuring:
const { address: { city } } = hero;

// Result
console.log(city); // output: 'Gotham'


