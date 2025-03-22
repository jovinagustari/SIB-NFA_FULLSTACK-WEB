class Vehicle {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    getInfo() {
        return `${this.brand} ${this.model}, Tahun: (${this.year})`;
    }
}

class Car extends Vehicle {
    constructor(brand, model, year, doors) {
        super(brand, model, year);
        this.doors = doors;
    }

    getCarInfo() {
        return `${this.getInfo()}, Pintu: ${this.doors}`;
    }
}

class Motorcycle extends Vehicle {
    constructor(brand, model, year, type) {
        super(brand, model, year);
        this.type = type;
    }

    getMotorInfo() {
        return `${this.getInfo()}, Tipe: ${this.type}`;
    }
}

// Example usage:
const myCar = new Car('Toyota', 'Corolla', 2020, 4);
console.log(myCar.getMotorInfo()); // Output: Toyota Corolla, Tahun: (2020), Doors: 4

const myMotor = new Motorcycle('Yamaha', 'NMAX', 2021, 'Scooter');
console.log(myMotor.getMotorInfo()); // Output: Yamaha NMAX, Tahun: (2021), Tipe: Scooter