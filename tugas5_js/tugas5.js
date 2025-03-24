// **Data Produk**
let produkList = [
    { id:1, nama: "Laptop", harga: 12000000 },
    { id:2, nama: "Smartohone", harga: 7500000 },
    { id:3, nama: "Tablet", harga: 5000000 },
    { id:4, nama: "Smartwatch", harga: 3000000 },
    { id:5, nama: "Powerbank", harga: 500000 }
];

// nama fungsi dibebaskan
const eventHandler = () => {
    document.getElementById("tambahBtn").addEventListener("click", () => {
        tambahProduk(6, "Headset", 500000);
        tampilkanProduk();
    });

    document.getElementById("hapusBtn").addEventListener("click", () => {
        hapusProduk(6);
        tampilkanProduk();
    });
};

// **Menambahkan Produk dengan Spread Operator**
function tambahProduk(id, nama, harga) {
    produkList = [...produkList, { id, nama, harga }];
    console.log(`Produk '${nama}' berhasil ditambahkan.`);
};

// **Menghapus Produk dengan Rest Parameter**
function hapusProduk(id) {
    produkList = produkList.filter((produk) => produk.id !== id);
    console.log(`Produk dengan ID ${id} berhasil dihapus.`);
};

// **Menampilkan Produk dengan Destructuring**
function tampilkanProduk() {
    console.log("Daftar Produk:");
    produkList.forEach(({ id, nama, harga }) => {
        console.log(`ID: ${id}, Nama: ${nama}, Harga: Rp${harga}`);
    });
};

tampilkanProduk();

// contoh penambahan data
tambahProduk(6, "Headset", 500000);
tampilkanProduk();
hapusProduk(6);
tampilkanProduk();