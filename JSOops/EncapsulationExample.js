class Bike {
    // Constructor to initialize the bike
    constructor(model) {
        this.model = model;
        let speed = 0; // Private variable

        // Public method to get the current speed
        this.getSpeed = function() {
            return speed;
        };

        // Public method to set the speed
        this.setSpeed = function(newSpeed) {
            if (newSpeed >= 0) {
                speed = newSpeed;
                console.log(`Speed set to: ${speed} km/h`);
            } else {
                console.log('Speed must be positive');
            }
        };
    }

    // Public method to display bike details
    displayDetails() {
        console.log(`Bike Model: ${this.model}`);
    }
}

// Create an instance of the Bike class
const myBike = new Bike('Yamaha');

// Accessing the public methods
myBike.displayDetails(); // Output: Bike Model: Yamaha

myBike.setSpeed(50); // Output: Speed set to: 50 km/h
console.log(`Current Speed: ${myBike.getSpeed()} km/h`); // Output: Current Speed: 50 km/h

myBike.setSpeed(-10); // Output: Speed must be positive
console.log(`Current Speed: ${myBike.getSpeed()} km/h`); // Output: Current Speed: 50 km/h

// Trying to access the private speed variable directly will result in undefined
console.log(myBike.speed); // Output: undefined
