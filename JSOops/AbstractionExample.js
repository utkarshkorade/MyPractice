// Define a Car class
class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    // Public method to display car details
    displayDetails() {
        console.log(`Car: ${this.brand} ${this.model}`);
    }
    
    // Private method to simulate starting the engine
    #startEngine() {
        console.log('Engine started...');
    }

    // Public method to start the car
    startCar() {
        this.#startEngine();
        console.log(`${this.brand} ${this.model} is ready to go!`);
    }
}

// Create an instance of the Car class
const myCar = new Car('Toyota', 'Corolla');

// Accessing the public method
myCar.displayDetails(); // Output: Car: Toyota Corolla

// Trying to access the private method directly will result in an error
// myCar.#startEngine(); // SyntaxError: Private field '#startEngine' must be declared in an enclosing class

// Use the public method to start the car
myCar.startCar(); // Output: Engine started...
                  //         Toyota Corolla is ready to go!
