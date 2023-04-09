var arr = [1, 2, 3, 4, 5];

var [a, b, ...rest] = arr;

console.log(a, b, rest);

obj = {
  one: 200,
  two: 300,
};

const { one, two } = obj;
console.log(one, two);
