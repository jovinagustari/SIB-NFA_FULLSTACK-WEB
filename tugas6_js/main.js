const { index, store, destroy } = require("./controller.js");  // pakai require()

const main = () => {
    // menampilkan data awal dari data user
    console.log('----- Data awal -----');   
    index();

    // tambahkan dua data baru menggunakan fungsi store
    store({ nama: 'Alice', umur: 19, alamat: 'Underland', email: 'alicewonderland@gmail.com'});
    store({ nama: 'Mad Hatter', umur: 39, alamat: 'Underland', email: 'madhatter@gmail.com'});

    // tampilkan data setelah penambahan
    console.log('\n----- Data setelah penambahan -----');
    index();

    // hapus data user berdasarkan index
    destroy(3); // hapus data user yang pertama

    // tampilkan data setelah penghapusan
    console.log('\n----- Data setelah penghapusan Index-3 -----');
    index();
}

main()