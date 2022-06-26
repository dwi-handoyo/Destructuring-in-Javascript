
// Giving Default Value

const mhs = {
  nama: 'Ken Arok',
  umur: 35
}

const { nama, umur, email = 'kenArok@default.com' } = mhs;
console.log(email); // output: kenArok@default.com

const mhsa = {
  nama_a: 'Pari Kesit',
  umur_a: 27,
  email_a: 'pariKesit@contoh.com'
}

const { nama_a, umur_a, email_a = 'pariKesit@default.com'} = mhsa; // trying to change default value of email_a, but failed as per below console.log

console.log(email_a); // pariKesit@contoh.com


