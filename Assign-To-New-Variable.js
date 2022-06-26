
// Assignment To A New Variable

// Object:
const mhs = {
  nama: 'Godam Hero',
  umur: 33
}

// Destructuring:
const {nama, umur} = mhs;
console.log(nama); // output: 33
console.log(umur); // output: Godam Hero

// Assign to new variable:
const {nama: n, umur: u} = mhs;

// Result:
console.log(u); // Output: 33
console.log(n); // Output: Godam Hero
console.log(mhs);
// Output:
// Object idak berubah setelah destructuring (Object is not changed after destructuring)
// {
//  nama: "Godam Hero",
//  umur: 33
// }



