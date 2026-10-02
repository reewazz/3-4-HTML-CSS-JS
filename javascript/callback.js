const add = (a, b) => a + b;

function sub(a, b) {
  return a - b;
}
function mul(a, b) {
  return a * b;
}
function div(a, b) {
  return a / b;
}

// console.log(add(3,4))

function calculate(a, b, result) {
  return result(a, b);
}

console.log(
  calculate(2, 3, (a, b) => a + b),
  "focus here",
);

const multiply1 = (a, b) => {
  return a * b;
};
const divide1 = (a, b) => {
  return a / b;
};
function calculate(a, b, result) {
  return multiply1(a, b);
}
console.log(calculate(5, 10, multiply1));

function calculate(a, b, result) {
  return result(a, b);
}
console.log(calculate(10, 5, divide1));

function check(num) {
  if (num == 0) {
    return "zero";
  } else if (num >= 0) {
    return "positive";
  } else {
    return "negative";
  }
}

function processNumber(a, fn) {
  return fn(a);
}

function isOddOrEven(a) {
  if (a % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(processNumber(5, isOddOrEven));
console.log(processNumber(5, check));

console.log("hello");

setTimeout(() => {
  console.log("hello after 3 sec");
}, 5000);

const fruits = ["apple", "banana", "coconut", "dragonfruit"];

const numbers = [1, 2, 3, 4, 5];

fruits.forEach((item, index) => {
  console.log(item, index);
});

const students = [
  { name: "abc", age: 20 },
  { name: "def", age: 30 },
  { name: "ghi", age: 32 },
];


//ggg=[{name:"def",age:30}, { name: "ghi", age: 32 }]



const agessg30 = students.filter((item) =>  item.age > 25).map((item,index)=>item.age)

///[30,32]

console.log(agessg30, "focussssssss");
// students.forEach((item,index)=>{
//     console.log(item.name)
// })

const ages = students.map((item, index) => {
  return item.age;
});

console.log(ages);

const doubled = numbers.map((item, index) => {
  return item * 2;
});

const evens = numbers.filter((item, index) => {
  return item % 2 === 0;
});

console.log(evens);
