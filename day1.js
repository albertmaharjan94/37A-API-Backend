// const, let , var
const name = "Alice"; 
// const name = "Harry"; // cannot reassign a const variable
// name = "Bob"; // cannot reassign a const variable

let address = "Kathmandu";
// let adddress = "Pokhara"; // can reassign a let variable
address = "Pokhara"; // can reassign a let variable

var age = 20;
var age = 25;
age = 30; // can reassign a var variable

// Hoisting
console.log(city);

// Variable scope/block
if(true){
    const fname = "John"; // block scope
    let lname = "Doe"; // block scope
    var city = "New York"; // global/function scope
    console.log(fname); // John
    console.log(lname); // Doe
    console.log(city); // New York
}
// console.log(fname); // invalid
// console.log(lname); // invalid
console.log(city); // New York

// Variable data types
let strVar = "Hello"; // ``, '', ""
let numVar = 10; // number (float or integer)
let boolVar = true;
let nullVar = null; // intentional empty
let undefinedVar = undefined; // unintentional empty
let symVar1 = Symbol("id"); // unique and immutable
let symVar2 = Symbol("id");
console.log(symVar1 === symVar2); // false
console.log(typeof strVar); // string
// ";" is optional

// =, ==, ===
let num1 = 10; // = assign
let num2 = "10";
// ==, loose check
console.log(num1 == num2); // true
// ===, strict check
console.log(num1 === num2); // false

// Collection
let arr1 = [1, 2, "three", true, null, undefined];
arr1.push(4); // add element at the end
arr1.pop(); // remove last
arr1.unshift(0); // add element at the beginning
arr1.shift(); // remove first
arr1.splice(2, 1); // remove one element at index 2
console.log(arr1);

// spread operator "..."
let arr2 = [10, 20, 30];
let arr3 = [60, 70, 80];
let arr4 = [arr2, arr3]; // nested array
console.log(arr4);
let arr5 = [...arr2, ...arr3];
console.log(arr5);
let arr6 = [...arr2, 40, 50, ...arr3];
console.log(arr6);

// Objects (key/pair)/MAP
const obj1 = {
    name: "Alice",
    "age": 25,
    'isActive': true,
    hobbies: ["reading", "traveling", "coding"],
    address: {
        coord: [27.7172, 85.3240],
        city: "Kathmandu",
        country: "Nepal"
    }
}
console.log(obj1.name); // Alice
console.log(obj1["hobbies"]); 
// console.log(obj1[isActive]);
obj1.isActive = false; // update value
console.log(obj1.isActive); // false

// const obj1 = {}
// obj1 = {}
obj1.hobbies.push("swimming"); // add new value in array
console.log(obj1.hobbies); // ["reading", "traveling", "coding", "swimming"]
console.log(obj1.address.country);
// change lat of addres to 26.23
obj1.address.coord[0] = 26.23;

// Object missing properties
console.log(obj1.details); // undefined
// console.log(obj1.details.city); // error

// &&, ||, ??
obj1.details && console.log("Details exist"); // undefined
obj1.address && console.log("Address exist"); // Address exist

obj1.details || console.log("Details does not exist"); // Details does not exist
obj1.details ?? console.log("Details does not exist"); // Details does not exist

const check = 0;
console.log(check || "check is falsy"); // check is falsy
console.log(check ?? "check is null or undefined"); // 0

// optional chaining
console.log(obj1.details?.city);
console.log(obj1.details?.city?.street);

console.log(obj1.details?.city ?? "City does not exist");

// object destructuring
const { isActive } = obj1;
// const isActive = obj1.isActive;
const { address: { city, country } } = obj1;
console.log(city, country); // Kathmandu Nepal
const { name: fullName, age: years } = obj1;
console.log(fullName, years); // Alice 25