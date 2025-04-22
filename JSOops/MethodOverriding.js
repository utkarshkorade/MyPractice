/*Method Overriding:
Method overriding occurs when a subclass provides a specific implementation of a method that is already defined in its superclass. This allows you to define a method in a subclass with the same name as in the parent class, but with different behavior. */

class Animal {
    speak() {
        console.log('The animal makes a sound.');
    }
}

class Dog extends Animal {
    speak() {
        console.log('The dog barks.');
    }
}

class Cat extends Animal {
    speak() {
        console.log('The cat meows.');
    }
}

// Create instances
const dog = new Dog();
const cat = new Cat();

// Call the speak method
dog.speak(); 
cat.speak(); 
