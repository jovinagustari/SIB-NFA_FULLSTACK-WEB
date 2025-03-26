// **Data Produk**
let produkList = [
    { id:1, nama: "Laptop", harga: 12000000 },
    { id:2, nama: "Smartphone", harga: 7500000 },
    { id:3, nama: "Tablet", harga: 5000000 },
    { id:4, nama: "Smartwatch", harga: 3000000 },
    { id:5, nama: "Powerbank", harga: 500000 }
];

// nama fungsi dibebaskan
const eventHandler = () => {
    // menambahkan event listener (click) pada tombol tambahProduk dan hapusProduk
    document.getElementById("tambahProduk").addEventListener("click", () => {
        tampilkanProduk();
        // tambahProduk(6, "Headset", 500000);
    });

    document.getElementById("hapusProduk").addEventListener("click", () => {
        tampilkanProduk();
        // hapusProduk(6);
    });
};

// **Menampilkan Produk dengan Destructuring**
function tampilkanProduk() {
    const tbody = document.getElementById("listProduk"); // mengambil tbody pada table
    tbody.innerHTML = ""; // reset/kosongkan table

    // console.log("Daftar Produk:");
    // menampilkan list produk pada table menggunakan forEach
    produkList.forEach(({ id, nama, harga }) => {
        const row = `
        <tr>
            <td>${id}</td>
            <td>${nama}</td>
            <td>Rp${harga.toLocaleString()}</td>
            <td><button onclick="hapusProduk(${id})">Hapus</button></td>
        </tr>`;
        tbody.innerHTML += row;

        // console.log(`ID: ${id}, Nama: ${nama}, Harga: Rp${harga}`);
    });
};

// **Menambahkan Produk dengan Spread Operator**
function tambahProduk(id, nama, harga) {
    produkList = [...produkList, { id, nama, harga }];
    console.log(`Produk '${nama}' berhasil ditambahkan.`);

    tampilkanProduk(); // untuk menampilkan produk pada table setelah data ditambahkan
};

// **Menghapus Produk dengan Rest Parameter**
function hapusProduk(id) {
    produkList = produkList.filter((produk) => produk.id !== id);
    console.log(`Produk dengan ID ${id} berhasil dihapus.`);

    tampilkanProduk(); // untuk menampilkan produk pada table setelah data dihapus
};

document.getElementById("tambahProduk").addEventListener("click", () => {
    const nama = document.getElementById("nama").value; // mengambil value dari input nama
    const harga = Number(document.getElementById("harga").value); // mengambil value dari input harga
    const id = produkList.length ? produkList[produkList.length - 1].id + 1 : 1; // menentukan id produk

    if (!nama || !harga) {
        alert("Harap isi nama dan harga produk.");
        return;
    }

    tambahProduk(id, nama, harga);
});

tampilkanProduk();

// contoh penambahan data
// tambahProduk(6, "Headset", 500000);
// tampilkanProduk();
// hapusProduk(6);
// tampilkanProduk();