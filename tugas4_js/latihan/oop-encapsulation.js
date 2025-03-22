class Produk {
    #harga;

    constructor(nama, harga) {
        this.nama = nama;
        this.#harga = harga;
    }

    getHarga() {
        return this.#harga;
    }

    setHarga(hargaBaru) {
        if (hargaBaru > 0) {
            this.#harga;
        } else {
            console.log('Harga tidak boleh negatif');
        }
    }
}

const tv = new Produk('Televisi', 3000000);
console.log(tv.getHarga()); // Output: 3000000

tv.setHarga(3500000);
console.log(tv.getHarga()); // Output: 3500000

tv.setHarga(-500000); // Output: Harga tidak boleh negatif