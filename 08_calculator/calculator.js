const add = function(a , b) {
  return a + b;
};

const subtract = function(a , b) {
  return a - b;
};

const sum = function(arr) {
	let total = 0;
  arr.forEach(ele => {
    total+=ele;
  });
  return total;
};
const multiply = function(arr) {
  let total = 1;
  arr.forEach(ele => {
    total = total * ele;
  });
  return total;
};
console.log(multiply([1,4,2]))
const power = function(a , b) {
	return a ** b;
};

const factorial = function(n) {
	if(n == 0 || n == 1) {
    return 1;
  }
  return factorial(n-1) * n;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
