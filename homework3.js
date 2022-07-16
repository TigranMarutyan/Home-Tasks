//1. Given an array of numbers. Find the index of the second maximum element.

function odDigit(num) {
  if (num === 0) {
    return true;
  }
  if (num % 2 === 0) {
    return false;
  }
  num = Math.floor(num / 10);
  return odDigit(num);
}

//2.Given an array of numbers. Write a recursive function to find its minimal positive element.
//  (if such element does not exist, return -1)

function minPositiveNumber(arr) {
  if (arr.length === 0) {
    return -1;
  }
  for (let elem of arr) {
    if (isSmallestPositive(elem, arr)) {
      return elem;
    } else {
      return minPositiveNumber(arr.slice(arr.indexOf(elem) + 1));
    }
  }
}

function isSmallestPositive(value, arr) {
  let min = Infinity;
  for (let elem of arr) {
    if (elem >= 0 && elem < min) {
      min = elem;
    }
  }
  return min === value;
}

//3.Given an array of numbers which is almost sorted in ascending order.
// Find the index where sorting order is violated.

function getIndex(arr) {
  if (arr.length < 2) {
    return -1;
  }
  if (arr[arr.length - 1] > arr[arr.length - 2]) {
    arr = arr.slice(0, arr.length - 1);
    return getIndex(arr);
  } else {
    return arr.length - 1;
  }
}

//4.Given an array. Write a recursive function that removes
//the first element and returns the given array

function removeFirst(arr, spliced = undefined) {
  if (spliced !== undefined) {
    return arr;
  }
  spliced = arr.splice(0, 1);
  return removeFirst(arr, spliced);
}

//5.Given an array of nested arrays. Write a recursive function that flattens it.
//  (Hint create function that concats arrays).

function flatten(arr) {
  return arr.reduce(
    (flattened, elem) =>
      flattened.concat(Array.isArray(elem) ? flatten(elem) : [elem]),
    []
  );
}

//6.Given an array and a number N.  Write a recursive function
//  that rotates an array N places to the left.
//  (Hint: to add element to the beginning use arr.unshift())

function rotate(arr, num) {
  if (num === 0) {
    return arr;
  }
  if (num < 0) {
    num++;
    arr.unshift(arr.pop());
    return rotate(arr, num);
  }
  num--;
  arr.push(arr.shift());
  return rotate(arr, num);
}

//7.Given a number. Write a function that calculates its sum of the digits
//and if that sum has more than 1 digit find the sum of digits of that number.
// Repeat that process if needed and return the result.

function f(num) {
  const str = "" + num;
  if (str.length === 1) {
    return num;
  } else {
    const sum = str.split("").reduce((accum, item) => accum + +item, 0);
    return f(sum);
  }
}

//8. Given an array of numbers. Find the index of the second maximum element.

function getIndexOfSecondMax(arr) {
  let max = -1,
    secondMax = -1;

  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
    } else if (arr[i] > secondMax && arr[i] != max) {
      secondMax = arr[i];
    }
  }
  return arr.indexOf(secondMax);
}

//9.Given an array of numbers, padding amount and repeat count. Pad the array in the following way:
//the padding amount specifies how many elements should be taken from the array edges,
//the repeat amount specifies how many times the pad should be repeated.
// Also, you should check that  padding amount <= length of array.

function padding(arr, paddAmount, repeat) {
  if (paddAmount > arr.length) {
    return "Invalid number";
  }
  for (let i = 0; i < repeat; i++) {
    for (let j = 0; j < paddAmount; j++) {
      arr.push(arr[arr.length - paddAmount]);
      arr.unshift(arr[paddAmount - 1]);
    }
  }
  return arr;
}

//10. Write a program to check the validity of password input by users.
//Validation:

function checkValidity(str) {
  let number = 0;
  let uppercase = 0;
  let lowercase = 0;
  let character = 0;

  if (str.length < 6 || str.length > 16) {
    return "Invalid";
  }
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(str[i]) >= 65 && str.charCodeAt(str[i]) <= 90) {
      uppercase++;
    }
    if (str.charCodeAt(str[i]) >= 97 && str.charCodeAt(str[i]) <= 122) {
      lowercase++;
    }
    if (str[i] === "$" || str[i] === "#" || str[i] === "@") {
      character++;
    }
    if (typeof Number(str[i]) === "number") {
      number++;
    }
  }
  if (number > 0 && uppercase > 0 && lowercase > 0 && character > 0) {
    return "Valid";
  }
  return "Invalid";
}

//11.Write a program to print X star pattern series using loop
let str = "";
let num = 5;
const count = num * 2 - 1;
for (let i = 1; i <= count; i++) {
  for (let j = 1; j <= count; j++) {
    if (j == i || j === count - i + 1) {
      str += "*";
    } else {
      str += " ";
    }
  }
  str += "\n";
}

//12.Given a string. Split it into words around the spaces and print them in an array.
//Word can be anything which is string․
// If there is a sequence of spaces, the result will be empty strings.

function split(str) {
  return str.split(" ");
}

//13.Given an array of numbers. Print frequency of each unique number.
//(Frequency is the count of particular element divided by the count of all elements)

function frequnecy(arr) {
  let a = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (a.hasOwnProperty(arr[i])) {
      continue;
    }
    let counter = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        counter++;
      }
    }
    a.set(arr[i], counter / arr.length);
  }
  return a;
}

//14.Print the following number pattern:
// 1
// 12
// 123
// 1234
// 12345
// 1234
// 123
// 12
// 1

const num = 5;
let str = "";
for (let i = 1; i <= num; i++) {
  for (let j = 1; j <= i; j++) {
    str += j;
  }

  str += "\n";
}

for (let i = num - 1; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {
    str += j;
  }

  str += "\n";
}

//15.Given an array of strings and numbers.
//Print the number of integers and the number of strings in the array

function getNumberOfIntegersAndStrings(arr) {
  let countOfString = 0;
  let countOfNumber = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      countOfNumber++;
    } else if (typeof arr[i] === "string") {
      countOfString++;
    }
  }
  return `Numbers:${countOfNumber},Strings: ${countOfString}`;
}
