const users = require("./data.js");  // pakai require()

// tampilkan data user
const index = () => {
    console.log('Data User:');

    // menampilkan data user menggunakan map
    users.map((user, i) => {
        console.log(`${i + 1}. ${user.nama} - ${user.umur} tahun - ${user.alamat} - ${user.email}`);
    });
}

// tambah data user baru
const store = (user) => {
    users.push(user);
    console.log('\nData user berhasil ditambahkan!');
}

// hapus data user berdasarkan index
const destroy = (index) => {
    // memastikan kalau index yang diinputkan valid dan tersedia
    if (index >= 0 && index < users.length) {
        users.splice(index, 1);
        console.log('\nData user berhasil dihapus!');
    } else {
        console.log('\nIndex tidak valid!');
    }
};

module.exports = { index, store, destroy };  // pakai module.exports agar bisa dijalankan di node