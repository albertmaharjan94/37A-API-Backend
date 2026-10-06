// function and iterators
// 1. function keyword
function fun1(arg1, arg2){
    const sum = arg1 + arg2;
    // return is optional 
    return sum;
}
const result1 = fun1(10, 20);
console.log(result1); // 30

// 2. function expression
const fun2 = function(arg1){
    return arg1 * 2;
}
const result2 = fun2(10);
console.log(result2); // 20

// 3. arrow function
const fun3 = (arg1) => "Hello " + arg1; // implicit return
const result3 = fun3("Alice");
console.log(result3); // Hello Alice

const fun4 = (param) => {
    // must use return for multiple statements
    return param + 2;
}
const result4 = fun4(10);
console.log(result4); // 12

// closure and callbacks
// closure -> function preserves state and return function
const outerFunction = (outerParam) => {
    let counter = outerParam || 0;
    const innerFunction = () => {
        counter++;
        console.log(counter);
    }
    return innerFunction;
}
const clousureFunction = outerFunction(5);
clousureFunction(); // 6
clousureFunction(); // 7

const closureFunction2 = outerFunction(10);
closureFunction2(); // 11

clousureFunction(); // 8

// callbacks/HOF (Higher Order Function)
const callbackFunction = (num1, callback) => {
    return callback(num1);
}
const cb1 = (number1) => {
    return number1 * 2;
}
const result5 = callbackFunction(10, cb1);
console.log(result5); // 20
// 
const calculate = (num1, num2, cb) => {
    return cb(num1, num2);
}
const add = (a, b) => a + b;
const substract = (a, b) => a - b;
const result6 = calculate(10, 5, add);
console.log(result6); // 15
const result7 = calculate(10, 5, (a,b) => a * b);
console.log(result7); // 50
// same function/ different implementation

// classwork
// make a function that takes, 3 number and a callback function
// 1. make a function to calculate the average of 3 numbers
// 2. make a function to calculate the sum of 3 numbers
// 3. make a function to find max of 3 numbers, // Math.max(num1, num2, num3)
// 4. make a function to find min of 3 numbers, // Math.min(num1, num2, num3)

// use these 4 functions as callback on the main function and return the result
const mainFunction = (num1, num2, num3, cb) => {
    return cb(num1, num2, num3);
}
const sum = (a, b, c) => a + b + c;
const res1 = mainFunction(10, 20, 30, sum);
console.log(res1); // 60

// Function iteratos
const fruits = ["apple", "banana", "cherry", "mango"];
// 1. forEach
const howToIterate = (element, index, array) => {
    console.log(element, index, array);
}
fruits.forEach(howToIterate);

fruits.forEach(
    (value, idx) => {
        console.log("Eating " + value);
    }
)

// 2. map -> transformation/new list
const newFruits = fruits.map(element => element.toUpperCase());
console.log(newFruits); // ["APPLE", "BANANA", "CHERRY", "MANGO"]
// must have return (how to transform) and new list is created

// impl in UI/UX
const components = fruits.map(
    (fruit, idx) => {
        let className;
        if(idx % 2 === 0){
            className = "even bg-light";
        }else{
            className = "odd bg-dark";
        }
        return <li key={idx} className={className}>{fruit}</li>;
    }
);
console.log(components);
// transforming list of data into any shape or components

const newData = fruits.map(
    ( fruits, idx) => {
        return fruits.toUpperCase();
    }
);

// 3. filter
const bigFruits = fruits.filter(
    (fruit) => fruit.length > 5
);
console.log(bigFruits); // ["banana", "cherry"]
// must have return (condition) and new list is created

const fruitOdd = fruits.filter(
    (fruit) => {
        // conditions/multiple
        const condition = true;
        return condition;
    }
);

// 4. reduce -> single value
// acuuluated value
const numArr = [10, 20, 30 ];
const sumOfNum = numArr.reduce(
    (accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 
    0 // initial value of accumulator
);
console.log(sumOfNum); // 60

// Classwork
const students = [
    { name: "Alice", age: 20, score: 85},
    { name: "Bob", age: 22, score: 90},
    { name: "Charlie", age: 19, score: 50},
]

// 1. use map to make a list of student names only
// 2. use filter to make a list of students who scored more than 80
// 3. use reduce to calculate the total score of all students

