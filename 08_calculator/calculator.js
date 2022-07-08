const add = function(a, b) {return a + b;};

const subtract = function(a, b) {return a - b;};

const sum = function (arr) {return arr.reduce((total, num) => total + num, 0)};

const multiply = function(arr) {return arr.reduce((a , b) => a * b)};

const power = function(num, power) {
  if (power == 0){return 1;}
  else if(power == 1){return num;}

  let arr = [];
  for (let i = 0; i<power;i++){arr.push(num)};
  return arr.reduce((a, b) => a * b );
};

const factorial = function(num) {
  if(num == 0){return 1}
  
  let arr = [];
  let i = num;
  
  while (i > 0){
      arr.push(i);
      i--;
    }
    return arr.reduce((a, b) => a * b);
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
