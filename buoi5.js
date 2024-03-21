// // BÀI TẬP VỀ THIS
// var student = {
//     name: 'Pham Anh Kiet',
//     getName: function() {
//         console.log(this.name);
//         return this.name;
//     }
// };

// var _deStudent = student.getName();

// // BT VÈ GLOBAL 
// var t = "Kiệt";
// function hello(){
//     console.log("hello "+t);
// }

// hello();

// // // BT VỀ SCOPES, CALL & APPLY
// // var person1 = {name: "Anh Kiệt", age: 21};
// // var person2 = {name: "tèo", age: 12};
// // var sayHello = function() {alert("Hello, "+this.name);};
// // var sayGoodbye = function() {alert("Goodbye, "+this.name);};
// // sayHello.call(person1);
// // sayHello.call(person1);
// // sayGoodbye.call(person2);
// // sayHello.apply(person1);
// // sayGoodbye.apply(person2);

// // BT VÈ CHAIN
// function step1() {
//     console.log(te);
// }

// var te = "phạm anh kiệt";

// function step2() {
//     te = 2;
//     step1();
// }
// step2();

// // BT VỀ SCOPES, BIND
// var checkNumericRange = function(value) {
//     if(typeof value !== 'number')
//     return false;
//         else
//     return value >= this.minimum && value <= this.maximum;
// }

// var range = {minimum:10, maximum:20};
// var range2 = {minimum:15, maximum:20};

// var boundCheckNumericRange = checkNumericRange.bind(range);
// var boundCheckNumericRange = checkNumericRange.bind(range2);

// var result = boundCheckNumericRange(14);
// console.log(result);

// // BT VẺ LEXICAL
// function fOuter() {
//     var  x = "Hello";
//     function fInner() {
//          x = "World";
//     }
//     fInner();
//     return x;
// }

// console.log(fOuter());

// var myFunction = function() {
//     var name2 = "anh kiệt";
//     var myOtherFunction = function() {
//         console.log("I am " + name2);
//     };
//     console.log(name2);
//     myOtherFunction();
// };
// myFunction();

// // BT VỀ CLOSURES
// function outerF() {
//     var x = "World";
//     function innerFsetX(val) {
//         x = val;
//     }
//     return innerFsetX;
// }
// var a = outerF();
// console.log(a("Hello"));

// var registrations = {
//     class: "Databases",
//     students: [
//         { studentId: "001", name: "Pham Anh Kiet"},
//         { studentId: "002", name: "Pham Anh B"},
//         { studentId: "003", name: "Pham Anh C"},
//     ],

//     clickEnrollment: function() {
//         var self = this;
//         this.students.forEach(function(student) {
//             console.log(student.name + " already enrolled class " + self.class);
//         })
//     }
// }
// registrations.clickEnrollment();

// var sayBye = function(name3) {
//     var text = "Bye, "+ name3;
//     return () => {
//         console.log(text);
//     }
// }
// sayBye('Me');
// var calledMe = sayBye('Me');
// calledMe();

// // BT VE CURRY
// function add(a, b, c) {
//     return a+b+c;
// }

// console.log(add(1,2,3));
// function addCurries(a) {
//     return (b) => {
//         return (c) => {
//             return a+b+c;
//         }
//     }
// }
// console.log(addCurries(1)(2)(3));
// const ad1 = addCurries(1);
// const ad2 = ad1(2);
// const ad3 = ad2(4);

// console.log(ad3);

// CHUYỂN ĐỔI CODE
// class Car {
//   constructor() {
//     this.speed = 0;
//   }

//   printSpeed() {
//     console.log(this.speed);
//   }
// }

// var car = new Car();
// car.instanceMethod = function() {
//   console.log('an instance method');
// };
// car.speed = 50;
// car.printSpeed();
// car.instanceMethod();

// class Cabriolet extends Car {
//   constructor() {
//     super();
//     this.topState = 'closed';
//   }

//   openTop() {
//     this.topState = 'opened';
//     console.log('Top: ' + this.topState);
//   }

//   closeTop() {
//     this.topState = 'closed';
//     console.log('Top: ' + this.topState);
//   }
// }

// var cabriolet = new Cabriolet();
// cabriolet.speed = 120;
// cabriolet.printSpeed();
// cabriolet.openTop();
// cabriolet.closeTop();

// class TeslaCabriolet extends Cabriolet {
//   constructor() {
//     super();
//     this.name = 'Tesla http://www.teslamotors.com/roadster';
//   }

//   sayName() {
//     console.log(this.name);
//   }
// }

// var tesla = new TeslaCabriolet();
// tesla.openTop();
// tesla.sayName();

// // phá 1
// function square (width) {
//   var squareObject = {};
//   squareObject.getArea = function() { 
//     if(width>0) return width*width;
//   }
//   return squareObject;
// }
//   var myBox = square (5);
//   console.log(myBox.getArea());
//   console.log(myBox.width);

// // phá 2
// function cube(width) {
//   var cubeObject = square (width);
//   var squareArea = cubeObject.getArea;
//   cubeObject.getVolume = function () {
//     if(width>0) return squareArea () * width;
//   }
//   cubeObject.getArea = function () { 
//     if(width>0) return squareArea () * 6;
//   }
//   return cubeObject;
// }  
//   var myCube = cube (5); 
//   console.log(myCube.getVolume());
//   console.log(myCube.getArea());
