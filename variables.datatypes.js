/*
File name - kebab-case Ex. intro-typescript.ts
Class name - PascalCase Ex. IntroTypescript.ts
Function name - camelCase Ex. getUserData()
Variable name - camelCase Ex. userData
Constant name - UPPER_CASE Ex. MAX_LIMIT
*/
// Variables - let, const, var /In typescript you can assign types to your variables,you can declare variable with or without types.
let userName = "Pawan Kumar";
const userAge = 30;
var isActive = true;
/*
common types in typescript
- string "hello" , "hi there"
- boolean true, false
- any any type can hold any value, it is not recommended to use it as it defeats the purpose of type safety
let x: unknown = "Hello";

null / undefined - absence of value

object { name: "Pawan", age: 36 } - object type, can be used to define complex data structures

- array [1, 2, 3] - array type, can hold multiple values of the same type

*/
// special types in typescript 
let data = "Hello TypeScript"; // any type, can hold any value
data = 42;
let value = "Hello TypeScript"; // unknown type, must be checked before use
if (typeof value === "string") {
    console.log(value.toUpperCase()); // safe to use as string
}
else {
    console.log("Value is not a string");
}
// = assignment operator, == equality operator, === strict equality operator
// != inequality operator, !== strict inequality operator
//In js: 1 == '1' // true but in ts === equality operator checks both value and type
// In ts: 1 === '1' // false, because number and string are different
const person = { name: "Pawan" };
person.name = "Raman"; // allowed, object properties can be changed
// person = { name: "Raman" }; // not allowed, const cannot be reassigned
// Data Types - string, number, boolean, any, void, null, undefined
let userScore = 95.5; // number type
let userStatus = "active"; // string type
let userDetails = { name: "Pawan", age: 36 }; // any type
let userAddress = null; // null type
let userId = undefined; // undefined type
//There are two types of arrays in TypeScript:
// 1. Using the type annotation syntax: string[], number[], etc.
// 2. Using the generic Array type: Array<string>, Array<number>, etc.
let userTags = ["developer", "typescript", "javascript"]; // array of strings
let userScores = [90, 85, 88]; // array of numbers
// Tuple - fixed size and types
let userTuple = ["Pawan", 36]; // tuple with string and number
// Enum - Used to define a set of named constants
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "ADMIN";
    UserRole["User"] = "USER";
    UserRole["Guest"] = "GUEST";
})(UserRole || (UserRole = {}));
console.log(UserRole.Admin); // Output: ADMIN
console.log(UserRole.User); // Output: USER
//🚦 Enum in a Function Example
var TrafficLight;
(function (TrafficLight) {
    TrafficLight[TrafficLight["Red"] = 0] = "Red";
    TrafficLight[TrafficLight["Yellow"] = 1] = "Yellow";
    TrafficLight[TrafficLight["Green"] = 2] = "Green";
})(TrafficLight || (TrafficLight = {}));
function getSignalDuration(light) {
    switch (light) {
        case TrafficLight.Red:
            return 60;
        case TrafficLight.Yellow:
            return 5;
        case TrafficLight.Green:
            return 30;
    }
}
console.log(getSignalDuration(TrafficLight.Yellow)); // Output: 5
// Enums can also be numeric or string-based
//Enums work really well with automation logic too — want to see how to use enums for Playwright test flow control or status tracking? I can show you a few advanced patterns
/*

Why Use Enums?
Improve code clarity and self-documentation.
Prevent use of invalid values by restricting inputs.
Ideal for switch-case logic, form controls, permission levels, and more.

*/
// Function with typed parameters and return type
function add(a, b) {
    return a + b;
}
let sum = add(88, 10);
console.log(sum);
// Type Assertion - telling TypeScript the type of a variable
let someValue = "Hello TypeScript";
let strLength = someValue.length; // using 'as' syntax
// or using angle-bracket syntax
let strLength2 = someValue.length;
let user = {
    name: "Pawan Kumar",
    age: 36,
    isActive: true
};
// Object Types - defining the structure of an object
let userObject = {
    name: "Pawan Kumar",
    age: 36,
    isActive: true
};
let post = {
    title: "TypeScript Basics",
    content: "Learn the basics of TypeScript.",
    id: 1
    // published is optional, can be omitted
};
const profile = {
    username: "PawanDev",
    contact: {
        email: "pawan@example.com"
    }
};
function printProduct(p) {
    console.log(`${p.name} costs ₹${p.price}`);
}
printProduct({ name: "Laptop", price: 50000 });
let anotherUser = {
    name: "John Doe",
    age: 28,
    isActive: false
};
// Function with interface as parameter
function greetUser(user) {
    return `Hello, ${user.name}! You are ${user.age} years old.`;
}
console.log(greetUser(anotherUser));
// Union Types - variable can hold multiple types
let id; // can be a number or a string
id = "abc"; // now it's a string
id = 123; // now it's a number
id = true; // will cause an error, as boolean is not allowed
let userProfile = {
    email: "abc@gmail.com",
    phone: "123-456-7890",
    street: "123 Main St",
    city: "Anytown"
};
// Literal Types - specific values for a variable
let direction; //
// direction can only be one of these values
direction = "left"; // valid
let product = {
    id: 1,
    name: "Laptop",
    price: 999.99
    // description is optional, can be omitted
};
let config = {
    apiUrl: "https://api.example.com",
    timeout: 5000
};
// config.apiUrl = "https://api.newurl.com"; // will cause an error,
// as apiUrl is readonly
// Type Guards - checking the type of a variable at runtime
function isString(value) {
    return typeof value === "string";
}
function processValue(value) {
    if (isString(value)) {
        console.log(`String value: ${value}`);
    }
    else {
        console.log(`Number value: ${value}`);
    }
}
processValue("Hello TypeScript");
processValue(42);
