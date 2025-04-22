/*Dynamic Method Binding:
JavaScript's dynamic nature allows you to call methods on objects without knowing their exact type at compile time. This is often used with functions and classes.
Certainly! Dynamic method binding in JavaScript is a powerful feature that allows you to write code that can operate on objects of different types, with the behavior depending on the actual object type at runtime. This is particularly useful in scenarios where you want to write functions or methods that can handle various classes of objects in a polymorphic manner */

// Base class
class Animal {
    speak() {
        console.log('The animal makes a sound.');
    }
}

// Subclass 1
class Dog extends Animal {
    speak() {
        console.log('The dog barks.');
    }
}

// Subclass 2
class Cat extends Animal {
    speak() {
        console.log('The cat meows.');
    }
}

// Function that operates on different types of Animal objects
function makeAnimalSpeak(animal) {
    if (animal instanceof Animal) {
        animal.speak(); // Calls the speak method based on the actual object type
    } else {
        console.log('Provided object is not an instance of Animal.');
    }
}

// Create instances
const dog = new Dog();
const cat = new Cat();

// Call the function with different types of Animal objects
makeAnimalSpeak(dog); // Output: The dog barks.
makeAnimalSpeak(cat); // Output: The cat meows.

// Demonstrating dynamic binding with objects created at runtime
const unknownAnimal = {
    speak() {
        console.log('This is an unknown animal.');
    }
};

// Call the function with an object that has a speak method but is not a subclass of Animal
makeAnimalSpeak(unknownAnimal); // Output: This is an unknown animal.
