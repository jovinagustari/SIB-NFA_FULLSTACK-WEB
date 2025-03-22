class Pelanggan {
    constructor(nama, nomorTelepon, kendaraanDisewa) {
        this.nama = nama;
        this.nomorTelepon = nomorTelepon;
        this.kendaraanDisewa = kendaraanDisewa;
    }
}

class ManajemenTransportasi {
    constructor() {
        this.pelangganList = [];
    }

    tambahPelanggan(nama, nomorTelepon, kendaraanDisewa) {
        const pelanggan = new Pelanggan(nama, nomorTelepon, kendaraanDisewa);
        this.pelangganList.push(pelanggan);
        this.tampilkanPelanggan();
    }

    tampilkanPelanggan() {
        const daftarPelanggan = document.getElementById("daftarPelanggan");
        daftarPelanggan.innerHTML = "";
        this.pelangganList.forEach(pelanggan => {
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
sistemTransportasi.tambahPelanggan("Aldi", "08123456789", "Mobil");
