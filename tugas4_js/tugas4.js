class Pelanggan {
    constructor(nama, nomorTelepon, kendaraanDisewa) {
        this.nama = nama;
        this.nomorTelepon = nomorTelepon;
        this.kendaraanDisewa = kendaraanDisewa;
    }
}

class ManajemenTransportasi {
    constructor() {
        this.listPelanggan = [];
    }

    tambahPelanggan(nama, nomorTelepon, kendaraanDisewa) {
        const pelanggan = new Pelanggan(nama, nomorTelepon, kendaraanDisewa);
        this.listPelanggan.push(pelanggan);
        this.tampilkanPelanggan();
    }

    tampilkanPelanggan() {
        const daftarPelanggan = document.getElementById("daftarPelanggan");
        daftarPelanggan.innerHTML = "";
        this.listPelanggan.forEach(pelanggan => {
            const row = `<tr>
                <td>${pelanggan.nama}</td>
                <td>${pelanggan.nomorTelepon}</td>
                <td>${pelanggan.kendaraanDisewa}</td>
            </tr>`;
            daftarPelanggan.innerHTML += row;
        });
    }
}

const sistemTransportasi = new ManajemenTransportasi();
sistemTransportasi.tambahPelanggan("Aldi", "08123456789", "Bus");
sistemTransportasi.tambahPelanggan("Jeon", "08126284789", "Motor");
sistemTransportasi.tambahPelanggan("Jung", "08123292784", "Pesawat");
