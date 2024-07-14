// Task 1: Declare Variable using var keyword
var myNum = 2;
console.log(myNum);

// Task 2: Declare Variable using let keyword
let myName = "John";
console.log(myName);

// Activity 2: Constant Declaration
// Task 3: Declare Variable using const keyword
const isAdmin = true;
console.log(isAdmin);

// Task 4: Different types of variable declaration
let myVar = 2; // number
console.log(myVar);
let myNewName = "John"; // string
console.log(myNewName);
let myBoolean = true; // boolean
console.log(myBoolean);
let myNull = null; // object
console.log(myNull);
let myUndefined = undefined; // undefined
console.log(myUndefined);
let mySymbol = Symbol("id"); // symbol
console.log(mySymbol);
let myArr = [1, 2, 3]; // array
console.log(myArr);
let myObj = { name: "John", age: 30 }; // object
console.table(myObj);

// Activity | Task 5: Re-Assiging variable
let newNum = 3;
console.log("Previous Value:", newNum);
newNum = 12;
let myNewNum = newNum;
console.log("New Value after re-assigning:", myNewNum);

// Activity | Task 6: Understanding Constant
const myAge = 23;
// console.log(myAge);
//myAge = 24; // This will throw an error
// E:\30_Days_JavaScript_Challenge\Day1\Variable_Delcaration.js:42
// TypeError: Assignment to constant variable.
console.log(myAge);

// Feature Requests
// 1: Declaring different types of variables in JS

// Declaring a Number
let num = 20;
console.log(typeof num);
console.log(num);

// Declaring a String
let str = "Hello World";
console.log(typeof str);
console.log(str);

// Declaring a Boolean
let bool = true;
console.log(typeof bool);
console.log(bool);

// Declaring a Null
let nullVal = null;
console.log(typeof nullVal);
console.log(nullVal);

// Declaring an Undefined
let undefinedVal;
console.log(typeof undefinedVal);
console.log(undefinedVal);

// Declaring a Symbol
let sym = Symbol("id");
console.log(typeof sym);
console.log(sym);

// Declaring an Array
let arr = [1, 2, 3];
console.log(typeof arr);
console.log(arr);

// Declaring an Object
let obj = { name: "John", age: 30 };
console.log(typeof obj);
console.log(obj);

// 2: Re-Assiginment Demo
// 2.1: Difference between let and const
let myNumber = 10;
console.log(myNumber);
myNumber = 20;
console.log(myNumber);

const myConstant = 10;
console.log(myConstant);
// myConstant = 20; // This will throw an error
// Uncaught TypeError: Assignment to constant variable.
