const factorial = (num) => {
  return num < 2 ? 1 : num * factorial(num - 1);
};

console.log(factorial(3));

const isNegative = (num) => num < 0;

console.log(isNegative(-10));

function isPositive(num) {
  return num >= 0;
}
