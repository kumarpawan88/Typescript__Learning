/*
File name - kebab-case Ex. intro-typescript.ts
Class name - PascalCase Ex. IntroTypescript.ts
Function name - camelCase Ex. getUserData()
Variable name - camelCase Ex. userData
Constant name - UPPER_CASE Ex. MAX_LIMIT
*/

// Variables - let, const, var /In typescript you can assign types to your variables,you can declare variable with or without types.
let userName: string = "Pawan Kumar";
const userAge: number = 30;
var isActive: boolean = true;




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

let data:  any = "Hello TypeScript"; // any type, can hold any value

data = 42

let value: unknown = "Hello TypeScript"; // unknown type, must be checked before use
if (typeof value === "string") {
    console.log(value.toUpperCase()); // safe to use as string
} else {
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
let userScore: number = 95.5; // number type

let userStatus: string = "active"; // string type

let userDetails: any = { name: "Pawan", age: 36 }; // any type

let userAddress: null = null; // null type

let userId: undefined = undefined; // undefined type


//There are two types of arrays in TypeScript:
// 1. Using the type annotation syntax: string[], number[], etc.
// 2. Using the generic Array type: Array<string>, Array<number>, etc.
let userTags: string[] = ["developer", "typescript", "javascript"]; // array of strings
let userScores: Array<number>= [90, 85, 88]; // array of numbers


// Tuple - fixed size and types
let userTuple: [string, number] = ["Pawan", 36]; // tuple with string and number

// Enum - Used to define a set of named constants
enum UserRole {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST"
}
console.log(UserRole.Admin); // Output: ADMIN
console.log(UserRole.User); // Output: USER


//🚦 Enum in a Function Example

enum TrafficLight {
  Red,
  Yellow,
  Green
}
function getSignalDuration(light: TrafficLight): number {
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
function add(a: number, b: number): number {
    return a + b;
    }
let sum= add (88, 10);
console.log(sum);

// Type Assertion - telling TypeScript the type of a variable
let someValue: any = "Hello TypeScript";
let strLength: number = (someValue as string).length; // using 'as' syntax


// or using angle-bracket syntax
let strLength2: number = (<string>someValue).length;


// Type Aliases - creating a new name for a type
type User = {
    name: string;
    age: number;
    isActive: boolean;
};
let user: User = {
    name: "Pawan Kumar",
    age: 36,
    isActive: true
};


// Object Types - defining the structure of an object
let userObject: { name: string; age: number; isActive: boolean } =
{
    name: "Pawan Kumar",
    age: 36,
    isActive: true
};

// Example of using object types with optional and readonly properties
type BlogPost = {
  title: string;
  content: string;
  published?: boolean;       // optional
  readonly id: number;       // can't be changed after creation
};
let post: BlogPost = {
    title: "TypeScript Basics",
    content: "Learn the basics of TypeScript.",
    id: 1
    // published is optional, can be omitted
};

// Nested Types - defining types within types
type Profile = {
  username: string;
  contact: {
    email: string;
    phone?: string;
  };
};

const profile: Profile = {
  username: "PawanDev",
  contact: {
    email: "pawan@example.com"
  }
};

// Function with object type parameter
type Product = {
  name: string;
  price: number;
};

function printProduct(p: Product): void {
  console.log(`${p.name} costs ₹${p.price}`);
}
printProduct({ name: "Laptop", price: 50000 });


// Interface - defining a contract for objects
interface IUser {
    name: string;
    age: number;
    isActive: boolean;
}
let anotherUser: IUser = {
    name: "John Doe",
    age: 28,
    isActive: false
};



// Function with interface as parameter
function greetUser(user: IUser): string {
    return `Hello, ${user.name}! You are ${user.age} years old.`;
}
console.log(greetUser(anotherUser));



// Union Types - variable can hold multiple types
let id: number | string; // can be a number or a string
id = "abc"; // now it's a string
id = 123; // now it's a number
id = true; // will cause an error, as boolean is not allowed



// Intersection Types - combining multiple types
type Contact = {
    email: string;
    phone: string;
};
type Address = {
    street: string;
    city: string;
};
type UserProfile = Contact & Address; // combines Contact and Address types
let userProfile: UserProfile = {
    email: "abc@gmail.com",
    phone: "123-456-7890",
    street: "123 Main St",
    city: "Anytown"
};



// Literal Types - specific values for a variable
let direction: "left" | "right" | "up" | "down"; //


// direction can only be one of these values
direction = "left"; // valid


// direction = "forward"; // invalid, will cause a TypeScript error
// Optional Properties - properties that may or may not be present
interface IProduct {
    id: number;
    name: string;
    price: number;
    description?: string; // optional property
}
let product: IProduct = {
    id: 1,
    name: "Laptop",
    price: 999.99
    // description is optional, can be omitted
};


// Readonly Properties - properties that cannot be changed
interface IConfig {
    readonly apiUrl: string; // cannot be changed after initialization
    timeout: number;
}
let config: IConfig = {
    apiUrl: "https://api.example.com",
    timeout: 5000
};
// config.apiUrl = "https://api.newurl.com"; // will cause an error,
// as apiUrl is readonly
// Type Guards - checking the type of a variable at runtime
function isString(value: any): value is string {
    return typeof value === "string";
}
function processValue(value: string | number) {
    if (isString(value)) {
        console.log(`String value: ${value}`);
    } else {
        console.log(`Number value: ${value}`);
    }
}
processValue("Hello TypeScript");
processValue(42);
