function Person(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.greet = function() {
        return `Hello, my name is ${this.name}`;
    };
}

let person1 = new Person('John Doe', 30, 'New York');
let person2 = new Person('Jane Smith', 25, 'Los Angeles');

console.log(person1.greet());
console.log(person2.greet());