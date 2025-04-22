// class vehical{
//     constructor(vehname,vehcc){
//         this.vehname=vehname;
//         this.vehcc=vehcc;
//     }
//     printinformation(){
//         console.log("name of the vehical ::",this.vehname);
//         console.log("name of the vehical ::",this.vehcc);
//     }
// }
// let  bike1= new vehical("kawasaki",900);
// let car1= new vehical("thar",1200);
// bike1.printinformation();

// private properties

// class student{
//     #age=0;
//     increment(){
//         this.#age++;
//     }
//     printinfo(){
//         console.log(this.#age);
//     }

// }
//     let st1=new student();
//     // st1.age=24;
//     st1.printinfo();
//     st1.increment();
//     st1.printinfo();

// static fields: we direct acess the static filled but not access using instace of class....

// class Addition {
//     static add(a, b) {
//         return a + b;
//     }
// }

// let eq1=new Addition();
// const result2=eq1.add(10,20);

// console.log(result2);

// //without instance

// class Addition {
//     static add(a, b) {
//         return a + b;
//     }
// }

// // Call the static method on the class
// const result = Addition.add(10, 20);
// console.log(result);

//static method

// class Person {
//     constructor(name, section, rollno, city){
//         this.name = name;
//         this.section = section;
//         this.rollno = rollno;
//         this.city = city
//     }
//     static nameandrollno(name, rollno) {
//         return new Person(name,"",rollno,"" )
//     }
//     static sectionandcity(section, city) {
//         return new Person("", section, "", city)
//     }
// }
// let per1 = Person.nameandrollno("Ram", 1);
// let per2 = Person.sectionandcity("A", "Delhi");
 
// console.log(per1);
// console.log(per2);

//Private static fields: A static field can be created by using the keyword static. Sometimes even the static fields are kept hidden, and you can make them private. 

// class User {
 
//     // Private static field of string type
//     static #name = "";
 
//     // Private static field
//     static #age
 
//     // Constructor function
//     Person(user_name, user_age) {
//         User.#name = user_name;
//         User.#age = user_age;
//         return User.#name + ' ' + User.#age;
//     }
// }
 
// // Create an object user1
// user1 = new User();
// console.log(user1.Person("John", 45));
 
// // Create an object user2
// user2 = new User()
// console.log(user1.Person("Mark", 35));


//Single Object Literal Method...........

class Person {
    constructor(age, details){
        this.age = age;
        this.details = details
    }
}
let per1 = new Person(12,{name:"Ram", rollno :1, 
                          Section:"A", City:"Delhi"});
let per2 = new Person(12, {})
 
console.log(per1);
console.log(per2);