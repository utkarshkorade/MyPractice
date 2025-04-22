/*Inheritance in JavaScript allows a class to extend another class, inheriting its properties and methods. This is accomplished using the extends keyword.  */

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
class Student extends Person {
    constructor(name, age, grade) {
        // Call the parent class constructor
        super(name, age);
        this.grade = grade;
    }

    study() {
        console.log(`${this.name} is studying and is in grade ${this.grade}.`);
    }
}
const student1 = new Student('Aadesh', 24, 'A');
student1.greet();  // Output: Hello, my name is Aadesh and I am 24 years old.
student1.study();  // Output: Aadesh is studying and is in grade A.

/* method overriding
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }

    greet() {
        // Call the parent class greet method
        super.greet();
        console.log(`I am a student in grade ${this.grade}.`);
    }
}

const student2 = new Student('Ravi', 21, 'B');
student2.greet();
// Output:
// Hello, my name is Ravi and I am 21 years old.
// I am a student in grade B.
 */