var arr = [];
arr.push(20, 30, 40, 50);
console.log(arr);
console.log(arr.length);

arr.length = 2;
console.log(arr.length, arr);

console.log(arr.concat([2, 3, 4]));

console.log(arr.filter((x) => x > 10).filter((x) => x < 25));

console.log(arr);

console.log(
  arr.forEach((x) => {
    console.log(x * x);
  })
);

var arr2 = arr.map((x) => x * 3);
console.log(arr2);
