/*
Operators are used to perform operations on values and variables.
Typescript supports all the operators that JavaScript does, with some additional type-specific operators.
Operators can be categorized into several types:
*/

//Arithmetic Operators: Used for mathematical calculations.
//example: +, -, *, /, % (addition, subtraction, multiplication, division, modulus)

let a=10;
let b=5;
console.log(a + b); // Output: 15
console.log(a - b); // Output: 5a
console.log(a * b); // Output: 50
console.log(a / b); // Output: 2
console.log(a % b); // Output: 0 (remainder of division)

//Comparison Operators: Used to compare values.
//example: ==, !=, ===, !==, <, >, <=, >= 
let x = 10;
let y = 20;
console.log(x == y); // Output: false (equality)
console.log(x != y); // Output: true (inequality)
console.log(x === y); // Output: false (strict equality)
console.log(x !== y); // Output: true (strict inequality)
console.log(x < y); // Output: true (less than)
console.log(x > y); // Output: false (greater than)
console.log(x <= y); // Output: true (less than or equal to)
console.log(x >= y); // Output: false (greater than or equal to

console.log(5>3); // true
console.log(5<3); // false

console.log(5==='5'); // false (strict equality checks both value and type)
console.log(5=='5'); // true (equality checks only value)

console.log(5!==5); // false (strict inequality checks both value and type)
console.log(5!=5); // false (inequality checks only value)

const f : number = 5 ;
const g: number = 10;
console.log(f !==g); // true (strict inequality checks both value and type)
console.log(f == g); // false (equality checks only value)

console.log((5 as number) !== (6 as number)); // true (strict inequality checks both value and type)
console.log((5 as number) == (6 as number)); // false (equality checks only value)

//(equality, inequality, strict equality, strict inequality, less than, 



//Logical Operators: Used to perform logical operations.
//example: && (AND), || (OR), ! (NOT)
 let isLoggedIn = true;
 let isAdmin = false;
 console.log(isLoggedIn && isAdmin); // Output: false (AND operation)
console.log(isLoggedIn || isAdmin); // Output: true (OR operation)
console.log(!isLoggedIn); // Output: false (NOT operation)
console.log(!isAdmin); // Output: true (NOT operation)


//Assignment Operators: Used to assign values to variables.
//example: =, +=, -=, *=, /=, %= (assignment, addition assignment, subtraction assignment,
let z = 5;
z += 10; // z = z + 10
console.log(z); // Output: 15
z -= 5; // z = z - 5
console.log(z); // Output: 10
z *= 2; // z = z * 2
console.log(z); // Output: 20
z /= 4; // z = z / 4
console.log(z); // Output: 5

//multiplication assignment, division assignment, modulus assignment)

//Bitwise Operators: Used to perform bit-level operations.
//example: &, |, ^, ~, <<, >>, >>> (AND, OR, XOR, NOT, left shift, right shift, unsigned right shift)

//Unary operators: Used to perform operations on a single operand.
//example: + (unary plus), - (unary minus), ++ (increment), --
let ab = 5;
console.log(-ab); // Output: -5 (unary minus)
console.log(++ab); // Output: 6 (increment)
console.log(--ab); // Output: 5 (decrement)
console.log(+ab); // Output: 5 (unary plus, no effect on number)


let ba = true;
console.log(!ba); // Output: false (unary NOT, negates the boolean value

let ca = 10;
ca++; // post-increment, ca becomes 11
ca--; // post-decrement, ca becomes 10 again
--ca; // pre-decrement, ca becomes 9
++ca; // pre-increment, ca becomes 10 again

console.log(ca++); 



//Ternary Operators: Used to perform operations on two operands.
//example: a ? b : c (if a is true, return b, otherwise return c
let newAge = 10;
let newResult = newAge >= 18 ? "Adult" : "Minor"; 
console.log(newResult); 


//Type Operators: Used to work with types in TypeScript.
//example: typeof, instanceof (to check the type of a variable or if an object is an instance of a class)

//Conditional (Ternary) Operator: A shorthand for if-else statements.
//example: condition ? expr1 : expr2 (if condition is true, expr1 is executed, otherwise expr2)

//Nullish Coalescing Operator: Used to provide a default value when dealing with null or undefined values.
//example: value ?? defaultValue (if value is null or undefined, defaultValue is used)

//Spread and Rest Operators: Used to expand or collect elements in arrays and objects.
//example: ... (spread operator to expand elements, rest operator to collect elements in a function parameter)


//Optional Chaining Operator: Used to safely access deeply nested properties.
//example: object?.property (if object is null or undefined, it returns undefined instead of throwing an error)


//Template Literals: Used for string interpolation and multi-line strings.
//example: `Hello, ${name}!` (allows embedding expressions within strings)

//Type Assertions: Used to override TypeScript's inferred type.
//example: let value = someValue as string; (tells TypeScript to treat someValue as a string)

//Type Guards: Used to narrow down types in conditional statements.
//example: if (typeof value === "string") { ... } (checks if value is a string before using it)

//Type Aliases: Used to create custom types for better code readability.
//example: type User = { name: string; age: number; } (creates a new type User with properties name and age)

//Enums: Used to define a set of named constants.

enum UserRole {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST"
}

//Type Inference: TypeScript automatically infers types based on the assigned values.
//example: let count = 10; // inferred as number

//Type Compatibility: TypeScript checks if types are compatible with each other.
//example: let num: number = 5; // number type

//Type Casting operators: Used to convert one type to another.
//example: let str: string = <string>someValue; // casting someValue to string




//20. Type Predicates: Used to define custom type guards in functions.
function isString(value: unknown): value is string {
  return typeof value === "string";
}

//value is string is the predicate
//It tells TypeScript: “if this returns true, you can safely treat value as a string afterward”


//21. Mapped Types: Used to create new types based on existing ones.
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};
type User = {
  name: string;
  age: number;
};
type ReadonlyUser = Readonly<User>; // ReadonlyUser has all properties of User but they are read-only 


//22. Conditional Types: Used to create types based on conditions.
type IsString<T> = T extends string ? true : false; // If T is a string, it resolves to true, otherwise false







