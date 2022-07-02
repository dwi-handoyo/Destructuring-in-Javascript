

// Destructuring Function Arguments

const mhs1 = {
  nama: 'Singo Dimedjo',
  umur: 33,
  email: 'singodimedjo@email.com'
}

    //buat function declaration-nya (ini tanpa destructuring)
function cetakMhs1(nama, umur) {
 return `Halo, nama saya ${nama}, saya berumur ${umur} tahun.`;
}

console.log(cetakMhs1(mhs1.nama, mhs1.umur)); // Halo, nama saya Singo Dimedjo, saya berumur 33 tahun.

  //cara lain (ini juga tanpa destructuring:

function cetakMhs2(mhs) {
 return `Halo, nama saya ${mhs.nama}, umur saya ${mhs.umur} tahun.`
}
 
console.log(cetakMhs2(mhs1)); // Halo, nama saya Singo Dimedjo, umur saya 33 tahun.

  //dengan cara destructuring

function cetakMhs3({ nama, umur }) {
 return `Halo, nama saya ${nama}, Saya berumur ${umur} tahun.`
}   

console.log(cetakMhs3(mhs1)); // Halo, nama saya Singo Dimedjo, Saya berumur 33 tahun.

  //contoh destructuring pada fungsi yang komplek (object di dalam object)

const mhs2 = {
 nama: 'Gatot Kaca',
 umur: 32,
 email: 'gatotkaca@email.com',
 nilai: {  
  tugas: 80,
  uts: 85,
  uas: 75
 } // ini object di dalam object ada dalam tanda {}
}

function cetakMhs4({ nama, umur, nilai: {tugas, uts, uas} }) {
 return `Halo, nama saya ${nama}, saya berumur ${umur} tahun, dan nilai UAS saya adalah ${uas}.`
} // nilei di-destructuring, (object di dalam object)
console.log(cetakMhs4(mhs2)); // Halo, nama saya Gatot Kaca, saya berumur 32 tahun, dan nilai UAS saya adalah 75.


