// Activity 1: For Loop

//Task 1: Print numbers from 1 to 10 using for loop

for (let i = 1; i <= 10; i++) {
  console.log(i);
}
console.log("");
//Task 2: Write a Program to print the multiplication table of 5 using a for loop
// Multiplication Table of 5
for (let i = 1; i <= 10; i++) {
  console.log(5, "*", i, "=", 5 * i);
}
console.log("");
//Activty 2: While Loop
// Task 1: Write a program to calculate the sum of numbers from 1 to 10 using a while loop
let myNum = 1;
let sum = 0;
while (myNum <= 10) {
  sum = myNum + sum;
  myNum++;
}
console.log("Sum of Numbers From 1 to 10 = " + sum);
console.log("");
// Task 2: Write a program to print numbers from 10 to 1 using while loop
let num = 10;
while (num >= 1) {
  console.log(num);
  num--;
}
console.log("");

// Activity 3: Do-While Loop
// Task 1: Write a program to print numbers from 1 to 5 using do-while loop
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);

// Task 2: Write a program to calculate the factorial of a number using a do--while loop
let num1 = 5;
let fact = 1;
let factNum = 1;
do {
  fact = fact * factNum;
  factNum++;
} while (factNum <= num1);
console.log("Factorial of " + num1 + " = " + fact);
console.log("");

// Activity 4: Nested Loops
// Task : Write a program to print a pattern left triangle using nested for loops

for (let i = 1; i <= 5; i++) {
  let str = "";
  for (let j = 1; j <= 5; j++) {
    if (j <= i) {
      str += "* ";
    } else {
      str += " ";
    }
  }
  console.log(str);
}

// Activity 5: Break and Continue
// Task 1: Write a program to print numbers from 1 to 10, but skip the number 5 using continue statement

for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    continue;
  } else {
    console.log(i);
  }
}
console.log("");
// Task 2: Write a program to print numbers from 1 to 10, but stop the loop when number is 7 using break statement

for (let i = 1; i <= 10; i++) {
  if (i == 7) {
    break;
  } else {
    console.log(i);
  }
}
