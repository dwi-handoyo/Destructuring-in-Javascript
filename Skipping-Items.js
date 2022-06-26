

// Skipping Items in Destructured Array

const perkenalan = ['Halo', 'nama', 'saya', 'Godam Jaya'];

const [salam,,,nama] = perkenalan; // 'nama' and 'saya' are skipped
console.log(salam); // output: Halo
console.log(nama); // output: Godam Jaya
