// Activity 1: If-else Statements

//Task 1: Write a program to check whether a number is positive or negative, or zero, and log the result to console

let num = 0;
if (num > 0) {
  console.log("Number is positive");
} else if (num < 0) {
  console.log("Number is negative");
} else {
  console.log("Number is zero");
}

//Task 2: Write a program to check if a person is eligible to vote (age >=18), and log the result to console
let personAge = 18;
if (personAge >= 18) {
  console.log("You are Eligible to Vote");
} else {
  console.log("You are not Eligible to Vote");
}

//Activity 2: Nested If-else Statements

// Task 1: Write a program to find the largest of three numbers using nested if-else statement
let num1 = 5;
let num2 = 10;
let num3 = -5;

if (num1 > num2 && num1 > num3) {
  console.log(num1 + " is the largest number");
} else if (num2 > num1 && num2 > num3) {
  console.log(num2 + " is the largest number");
} else {
  console.log(num3 + " is the largest number");
}

// Activity 3: Switch Case

//Task 1: Write a program that uses switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
let day = 1;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}

// Task 2: Write a program that uses a  switch case to assign a grade (A, B, C, D, D) based on a score and log the result to the console

let score = 90;
switch (score) {
  case 90:
    console.log("A");
    break;
  case 80:
    console.log("B");
    break;
  case 70:
    console.log("C");
    break;
  case 60:
    console.log("D");
    break;
  case 50:
    console.log("F");
  default:
    console.log("Invalid score");
}

// Activity 4: Conditional (Ternary) Operator

// Task : Write a program that uses a ternary operator to check if a number is even or odd, and log the result to the console

let number = 5;
let result = number % 2 === 0 ? "Number is Even!" : "Number is Odd!";
console.log(result);

//Activity 5: Combining Condtions

// Task: Write a program to check if a year is leap year using multiple conditons (divisible by 4, but not 100 unless also divisible by 400) and log the result the console

let year = 2023;

if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
  console.log(`${year} is a leap year`);
} else {
  console.log(`${year} is not a leap year`);
}
