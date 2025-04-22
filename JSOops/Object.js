//simple example of how to create object and how to access/print that object values
// const student={
//     name:"aadesh",
//     age:24,
//     add:'kuslmab',
//     ms:'singal'
// }

// console.log(student);

// console.log(student['ms']);

// console.log(student.name);

// student.name="sradha";

// console.log(student);

//prototye example 

// const student={
//     caltax(){
//         console.log("tax is 30%..");
//     }
// };
// const e1={
//     salary:500000,
//     age:24,

//     caltax(){
//         console.log("tax rate is 20%");
//     }
// };

// e1._proto_=student;

// e1.caltax();

// student._proto_=e1;
// student.caltax();

// //another option is by usning set prototype property in js
// Object.setPrototypeOf(e1, student);

// e1.caltax();

// this is 2nd way you create object....

// const student=new Object(); // we can create empty object also like ,cost student= {};

// student.name="aadesh";
// student.age=24;
// student.ms='single';
// student.clgname='cdac bengaluru';

// console.log(student);

// object constructor function

// function student(name,age,ms,add,clgname){

//     this.name=name;
//     this.age=age;
//     this.ms=ms;
//     this.add=add;
//     this.clgname=clgname;
// }
// // we can use const stu1= new Object (all value of studnet)also but when we c.log it give only first value

// const stu1=new student('aadesh',24,'single','kuslamb','cdac banglore');

// console.log(stu1);

// console.log(stu1.name);

// function in object ::

// const student={
//     stuname:'aadesh',
//     age:24,
//     add:'kuslamb',
//     clgname:'cdac banglore',
//     ms:'single',

//     displaydetail:function(){
//       console.log(`name of the student is ${this.stuname} \\this is also work in this format
//             age of the student ${student.age} 
//            address of student ${student.add}
//            collage of student ${student.clgname}
//            marritial status of studnet ${student.ms} `);
//     }
// }
// student.displaydetail();

// console.log(student['stuname']);

// Creating Object With Object.Create() Method ::

// const student={
    
//     printinfo:function(){
//         console.log(`my name is ${this.name}`);
//         console.log(`I am studing in ${this.clgname}`);
//     }
// }
//     const s1= Object.create(student);
//     s1.name="aadesh";
//     s1.clgname="cdac bangalore";

//     s1.printinfo();

//     //deleting property

//     console.log(s1.clgname);

//     delete s1.clgname;

//     console.log(s1.clgname);

