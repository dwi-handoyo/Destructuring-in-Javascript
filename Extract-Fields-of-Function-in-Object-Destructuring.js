
// Extract Fields of Function in Object Destructuring

// Object 
const mhs = {
  id: 123,
  nama: 'Gagak Rimang',
  umur: 35,
  email: 'gagakRimang@emails.com'
}

// Destructuring by using functions
function getId(mhs){
   return mhs.id;
}
function getNama(mhs){
   return mhs.nama;
}
function getValue(val){
   return val;
}
function getItems({id, nama}){
   return id + ', ' + nama;
}

// Default value - Individual Field
console.log(getId(mhs)); // output: 123
console.log(getNama(mhs)); // output: Gagak Rimang

console.log(getValue(mhs.id)); // output: 123
console.log(getValue(mhs.nama)); // output: Gagak Rimang

// Default Value - All Fields
console.log(getValue(mhs));
// output:
// {
//  email: "gagakRimang@emails.com",
//  id: 123,
//  nama: "Gagak Rimang",
//  umur: 35
// }

// Default Value - Multiple Fields
console.log(getItems(mhs)); // output: 123, Gagak Rimang


