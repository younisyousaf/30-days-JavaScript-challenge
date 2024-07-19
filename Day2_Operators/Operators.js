// Activity 1: Arithmetic Operators
// Task 1: Addition
let x = 5;
let y = 2;
let z = x + y;
console.log("Sum", z);

// Task 2: Subtraction
let a = 5;
let b = 2;
let c = a - b;
console.log("Difference", c);

// Task 3: Multiplication
let d = 5;
let e = 2;
let f = d * e;
console.log("Multiplication", f);

// Task 4: Division
let g = 5;
let h = 2;
let i = g / h;
console.log("Division", i);

// Task 5: Modulus
let j = 5;
let k = 2;
let l = j % k;
console.log("Modulus", l);

// Activity 2: Assignment Operators
// Task 1: +=
let myAge = 30;
myAge += 2;
console.log("Age increased using += operator", myAge);

// Task 2: -=
let myAge2 = 30;
myAge2 -= 2;
console.log("Age decreased using -= operator", myAge2);

// Activity 3: Comparsion Operators

// Task 1: Numbers Comparsion using < and > operators
let num1 = 5;
let num2 = 10;

if (num1 > num2) {
  console.log(`${num1} is greater than ${num2}`);
} else if (num1 < num2) {
  console.log(`${num1} is less than ${num2}`);
} else {
  console.log(`${num1} is equal to ${num2}`);
}

// Task 2: Numbers Comparsion using >= and <= operators
let num3 = 5;
let num4 = 10;

if (num3 >= num4) {
  console.log(`${num3} is greater than or equal to ${num4}`);
} else if (num3 <= num4) {
  console.log(`${num3} is less than or equal to ${num4}`);
} else {
  console.log(`${num3} is not equal to ${num4}`);
}

// Task 3: Numbers Comparsion using == and === operators
let num5 = 5;
let num6 = "5";
if (num5 == num6) {
  console.log(`${num5} is equal to ${num6}`);
} else if (num5 === num6) {
  console.log(`${num5} is strictly equal to ${num6}`);
} else {
  console.log(`${num5} is not equal to ${num6}`);
}

// Activtiy 4: Logical Operators
// Task 1: Using && operator
let cond1 = true; //true
let cond2 = true; //true

if (cond1 && cond2) {
  console.log("Both conditions are true");
}

// Task 2: Using || operator
let cond3 = true; //true
let cond4 = false; // false
if (cond3 || cond4) {
  console.log("One of the conditions is true");
}

// Task 3: Using ! operator
let cond5 = true; //true
if (!cond5) {
  console.log("The condition is false");
}

// Activity 5: Ternary Operator
// Task : Using ternary operator ?:
let number = -23;
let result = number < 0 ? "Negative Number" : "Positive Number";
console.log(result);
