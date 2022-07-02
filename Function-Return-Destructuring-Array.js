
// Destructuring Array by Implementing Function "Return"

// 1. Example of No Destructuring

function penjumlahanPerkalian(a, b) {
 return [a + b, a * b]; // return gunakan [] utk array
}

const hasil = penjumlahanPerkalian(2, 3);
console.log(hasil); // [5, 6]

const jumlah = penjumlahanPerkalian(2, 3)[0]; // digunakan indeks [0]
console.log(jumlah); // 5

const kali = penjumlahanPerkalian(2, 3)[1]; // digunakan indeks [1]
console.log(kali); // 6

// 2. Examples of Destructuring

// Agar tidak perlu gunakan indeks, maka terapkan destructuring return pada function

// Example-1
const [jumlah1, kali1] = penjumlahanPerkalian(2, 3);

console.log(jumlah1); // 5
console.log(kali1); // 6 

// Example-2
function kalkulasi(a, b){
  return [a + b, a - b, a * b, a / b]; //(*)
}

const [tambah, kurang, kali1a, bagi] = kalkulasi(2,3); // urutan tambah, kurang, kali, dan bagi harus sesuai urutan pada function (*)
console.log(bagi); // 0.6666666666666666
console.log(kali1a); // 6
console.log(kurang); // -1

function kalkulasi1 (a, b){
 return [a + b, a - b, a * b];
}

// Example-3

//Memberi nilai default = Tidak Ada
const [tambah1, kurang1, kali1b, bagi1 = 'Tidak Ada'] = kalkulasi1(2, 3);

console.log(bagi1); // Tidak Ada



