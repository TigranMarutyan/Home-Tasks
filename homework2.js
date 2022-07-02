// Array methods implementation

//1.foreach
Array.prototype.myEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

//2.map

Array.prototype.myMap = function (callback) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    newarr.push(cb(this[i], i, this));
  }
  return newArr;
};

//3.filter

Array.prototype.myFilter = function (callback) {
  let filteredArr = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      filteredArr.push(this[i]);
    }
  }
  return filteredArr;
};

//4.every

Array.prototype.myEvery = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (!cb(this[i], i, this)) {
      return false;
    }
  }
  return true;
};

//5.some

Array.prototype.mySome = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      return true;
    }
  }
  return false;
};

//6.find

Array.prototype.myFind = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return this[i];
    }
  }
};

//7.flat

function flat(array, depth = 1) {
  let newArr = [];
  (function flattener(array, depth) {
    for (let elem of array) {
      if (Array.isArray(elem) && depth) {
        flattener(elem, depth - 1);
      } else {
        newArr.push(elem);
      }
    }
  })(array, depth);
  return newArr;
}

//8.indexOff

Array.prototype.myIndexOff = function (value) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === value) {
      return i;
    }
  }
  return -1;
};

//9.pop

Array.prototype.myPop = function () {
  let returnedValue = this[this.length - 1];
  this.length = this.length - 1;
  return returnedValue;
};

//10.reduce

Array.prototype.myReduce = function (callback, initialvalue) {
  let accumulator = initialvalue;
  for (var i = 0; i < this.length; i++) {
    if (accumulator !== undefined) {
      accumulator = callback(accumulator, this[i], i, this);
    } else {
      accumulator = this[i];
    }
  }
  return accumulator;
};

//11.splice

//12.join

Array.prototype.myJoin = function (sep = "") {
  let result = "";
  for (let i = 0; i < this.length - 1; i++) {
    result += this[i];
    result += sep;
  }
  result += this[this.length - 1];
  return result;
};

//13.slice

Array.prototype.MySlice = function (begin, end) {
  let newArr = [];

  if (end === undefined || end > array.length) end = array.length;

  for (let i = begin; i < end; i++) {
    newArr.push(array[i]);
  }
  return newArr;
};
//14.fill

Array.prototype.MyFill = function (value, begin = 0, end = this.length) {
  if (begin < 0) {
    begin = this.length + begin;
  }
  if (end < 0) {
    end = end + this.length;
  }
  for (let i = begin; i < end; i++) {
    this[i] = value;
  }
  return this;
};
