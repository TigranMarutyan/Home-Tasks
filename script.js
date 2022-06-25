// 1.Given a number. Print “odd” if the number is odd and “even” if it’s even.
const inputNumber = +prompt("Enter your Number");

inputNumber % 2 === 0
  ? console.log(`${inputNumber} is odd`)
  : console.log(`${inputNumber} is even`);

// 2.Given two numbers print 1 if one of them is divisible by the other one, otherwise print 0.
const firstNumber = +prompt("first num");
const secondNumber = +prompt("second num");

console.log(
  Number(firstNumber % secondNumber === 0 || secondNumber % firstNumber === 0)
);

// 3.Given two variables, which are the angles of a triangle. Find the third angle of the
//   triangle. (Sum of the angles of a triangle equals 180 degrees).
const firstAngle = +prompt("first angle");
const secondAngle = +prompt("second angle");

console.log(`the third angle is ${180 - firstAngle - secondAngle} degree`);

// 4.Given number n (positive integer). Print the value of n + nn + nnn(not multiplication).
const number = +prompt("enter your number");

console.log(`${n}` + `${2 * n}` + `${3 * n}`);

// 5.Given a positive integer. Bring the last digit of the number to the beginning. Print the new
//   number. If the last digit of the inserted number is 0, number remains the same.
let yournum = prompt("Enter your num");

let arr = yournum.split("");

if (arr[arr.length - 1] == 0) {
  console.log(arr.join(""));
} else {
  let b = arr[arr.length - 1];
  arr[arr.length - 1] = arr[0];
  arr[0] = b;
  console.log(arr.join(""));
}

// 6.Given five numbers as input. Calculate and print the average of the numbers(without
//   using arrays).
const num1 = +prompt("enter 1 number");
const num2 = +prompt("enter 2 number");
const num3 = +prompt("enter 3 number");
const num4 = +prompt("enter 4 number");
const num5 = +prompt("enter 5 number");

console.log((num1 + num2 + num3 + num4 + num5) / 5);

// 7.Check if a number is a multiple of 3, 5 or 7 and output the appropriate message.
function multiply(num) {
  if (num % 105 === 0) {
    console.log(`${num} is multiply of 3,5 and 7`);
  } else if (num % 21 === 0) {
    console.log(`${num} is multiply of 3  and 7`);
  } else if (num % 15 === 0) {
    console.log(`${num} is multiply of 3 and 5 `);
  } else if (num % 35 === 0) {
    console.log(`${num} is multiply of 5 and 7`);
  } else if (num % 3 === 0) {
    console.log(`${num} is multiply of 3`);
  } else if (num % 5 === 0) {
    console.log(`${num} is multiply of 5`);
  } else if (num % 7) {
    console.log(`${num} is multiply of 7`);
  }
}
multiply(105);

// 8.Given an age, figure out whether someone is a baby(1 months - 12 months), toddler (1
//   year - 2 years), child(3 years - 12 years ), teenager(13 years - 17 years) or adult(18
//   years and more ). Also check that age in months is between 1 and 12.
function getAge(num, a) {
  if (a === "months" && a <= 12) {
    console.log("baby");
  } else if (num >= 1 && num <= 2 && a === "years") {
    console.log("toddler");
  } else if (num >= 3 && num <= 12 && a === "years") {
    console.log("child");
  } else if (num >= 12 && num <= 17 && a === "years") {
    console.log("teenager");
  } else if (num >= 18 && a === "years") {
    console.log("adult");
  }
}
getAge(4, "years");

// 9.Given three numbers. Sort them by the ascending order.
const x = 0;
const y = -1;
const z = 4;
if (x > y && x > z) {
  if (y > z) {
    console.log(z + ", " + y + ", " + x);
  } else {
    console.log(y + ", " + z + ", " + x);
  }
} else if (y > x && y > z) {
  if (x > z) {
    console.log(z + ", " + x + ", " + y);
  } else {
    console.log(x + ", " + z + ", " + y);
  }
} else if (z > x && z > y) {
  if (x > y) {
    console.log(y + ", " + x + ", " + z);
  } else {
    console.log(x + ", " + y + ", " + z);
  }
}

// 10.Percentage marks obtained by a student in three exams are to be entered to a
//    computer. An indication of Pass or Fail is given out after the three marks are entered.
//    The criteria for passing are as follows:
//    a.A student passes if all three examinations are passed.
//    b.Additionally a student may pass if only one subject is failed but the overall
//    average is greater than or equal to 50.
//    The pass mark for an individual subject is 40.
function passedExam(a, b, c) {
  if (
    ((a + b + c) / 3 >= 50 && a >= 40 && b >= 40) ||
    (a >= 40 && c >= 40) ||
    (b >= 40 && c >= 40)
  ) {
    console.log("exam is passed");
  } else {
    console.log("exam failed");
  }
}
passedExam(35, 25, 40);

// 11.Find the sign of product of three numbers without multiplication operator. Display the
//    specified sign.
const a = 2;
const b = -2;
const c = -2;

if (a === 0 || b === 0 || c === 0) {
  console.log("unsigned");
} else if (a < 0 && b < 0 && c < 0) {
  console.log("-");
} else if ((a < 0 && b < 0) || (b < 0 && c < 0) || (c < 0 && a < 0)) {
  console.log("+");
} else if (a < 0 || b < 0 || c < 0) {
  console.log("-");
} else {
  console.log("+");
}

// 12.Input three numbers a, b, c respectively, where a is a non zero number and write a
//    program to solve quadratic equations: . (Hint: use Math.pow or Math.sqrt).
function getQuadraticValues(a, b, c) {
  if (a === 0) {
    console.log("Enter valid constants");
  } else if (Math.pow(b, 2) - 4 * a * c < 0) {
    console.log("Solution does not exist");
  } else if (Math.pow(b, 2) - 4 * a * c === 0) {
    console.log(`Solution is ${(-b / 2) * a} `);
  } else {
    console.log(
      `Solutions are ${
        (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a)
      } and ${(-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a)} `
    );
  }
}
getQuadraticValues(1, 2, 1);

// 13.Given the following code rewrite it using only two if operators. (Hint: use logical
//    operators).
const n = +prompt();

var i = 0;
var j = 0;

if (n % 2 === 0 && !Math.floor(n / 10)) {
  i += 1;
}
if (n % 3 === 0 && n % 10 === 1) {
  j += 1;
}

// 14.Insert a digit and a number. Check whether the digits contains in the number or not.
function contains(num, digit) {
  if (num < 0) {
    num *= -1;
  }
  if (num == digit) {
    return true;
  }
  while (num != 0) {
    if (num % 10 == digit) {
      return true;
    }
    num = Math.floor(num / 10);
  }
  return false;
}

contains(145, 4);

// 15.Enter a number. Reverse its first and last digits. Print the new number.
function reverse(num) {
  num = num + "";
  let x = num.split("");
  let a = x[x.length - 1];
  x[x.length - 1] = x[0];
  x[0] = a;
  return +x.join("");
}
reverse(345);

// 17.Write a program which will compute the area of a rectangular or a triangle after
//    prompting the user to type the name of the figure name. Also check that entered
//    numbers are positive.
//    For the triangle entered numbers are height and and base.
function getArea(name, firstsize, secondsize) {
  if (firstSize <= 0 || secondSize <= 0) {
    return "Please enter only positives";
  }
  if (name === "rectangle") {
    return ` the square of rectangle is ${firstSize * econdSize}`;
  }
  if (name === "triangle") {
    return ` the square of triangle is ${(firstSize * secondSize) / 2}`;
  }
}
getArea("rectange", 8, 5);

// 18.Enter a number. Find the difference between its biggest and smallest digits.
function getDifference(num) {
  let max = 0;
  let min = 9;

  while (num) {
    a = num % 10;
    max = Math.max(a, max);
    min = Math.min(a, min);
    num = Math.floor(num / 10);
  }
  console.log(max - min);
}
getDifference(45690);
