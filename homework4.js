//1.Given an array of integers, find the pair of adjacent elements
//that has the largest product
//and return that product.

function largestProduct(arr) {
  let max = -Infinity;
  for (let i = 1; i < arr.length; i++) {
    max = Math.max(arr[i] * arr[i - 1], max);
  }

  return max;
}

//2.Given an array of integers. All numbers are unique.
//Find the count of missing numbers
//between minimum and maximum elements to make integers sequence.

function countOFMissing(arr) {
  let count = 0;
  let next = 0;
  for (let i = arr[0]; i <= arr[arr.length - 1]; i++) {
    if (arr[next] == i) {
      next++;
    } else {
      count++;
    }
  }
  return count;
}

//3.Convert a long phrase to its acronym.

function getAcronym(str) {
  return str
    .split(" ")
    .map((elem) => elem[0].toUpperCase())
    .join("");
}

//4.Given a string of digits, output all the contiguous substrings
//of length n in that string.

function subStr(str, num) {
  let a = str.split("");
  let result = [];
  for (let i = 0; i < a.length; i++) {
    if (i + num <= a.length) {
      result.push(a.slice(i, num + i).join(""));
    }
  }
  return result;
}

//5.Given a word, compute the scrabble score for the given word.
//To calculate scrabble score use the following table of scores:

function scrabbleScore(str) {
  const table = {
    a: 1,
    e: 1,
    i: 1,
    o: 1,
    u: 1,
    l: 1,
    n: 1,
    r: 1,
    s: 1,
    t: 1,
    d: 2,
    g: 2,
    b: 3,
    c: 3,
    m: 3,
    p: 3,
    f: 4,
    h: 4,
    v: 4,
    w: 4,
    y: 4,
    k: 5,
    j: 6,
    x: 6,
    q: 7,
    z: 7,
  };
  let score = 0;

  for (let i = 0; i < str.length; i++) {
    score += table[str[i]];
  }
  return score;
}

//6.Implement the classic method for composing secret messages called a square code.
//Given an English text, output the encoded version of that text.
//First, the input is normalized: the spaces and punctuation are removed from the English
//text and the message is downcased. Then, the normalized characters are broken into
//rows. The plain text should be organized into a rectangle. The size of the rectangle (r x
//c) should be decided by the length of the message, such that c &gt;= r and c - r &lt;= 1,
//where c is the number of columns and r is the number of rows. The coded message is
//obtained by reading down the columns going left to right.

let str =
  "If man was meant to stay on the ground, god would have given us roots.";
let newStr = input.replace(/[^\w]/g, "").toLowerCase();
const length = newStr.length;
const colums = Math.ceil(Math.sqrt(length));

let result = "";

for (let i = 0; i < colums; i++) {
  for (let j = i; j < length; j += cols) {
    result += newStr[j];
  }
  result += "\n";
}

console.log(result);

//7.
