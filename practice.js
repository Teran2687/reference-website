// Problem #1
function minToSec(min) {
  var sec = min * 60;
  return sec;
}

console.log(minToSec(19))
console.log(minToSec(15))

// Problem #2
function lessThan100(num1, num2) {
  var sum = num1 + num2;
  var answer = sum < 100;
  return answer;
}

console.log(lessThan100(60, 40));

//problem #3
function areaOfTriangle(base, height) {
  var area = base * height * 0.5;
  return area;
}

console.log(areaOfTriangle(6, 30))

//problem #4
function nextEven(num) {
  var even = num % 2 == 0;
  if (even) {
    num + 2;
  } else {
    num + 1;
  }
  return num;
}

console.log(nextEven(18));