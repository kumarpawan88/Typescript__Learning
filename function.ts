function addition(a: number, b: number, c: number): number {
  return a + b + c;
}
let newSum = addition(10, 20, 30); // Output: 60
console.log(newSum);
function welcome (name: string,age?: number): string {
  return age? `Hello ${name}, you are ${age} years old.` : `Hello ${name}`;
}
let newText = welcome("Pawan", 35);
console.log(newText); 
let newText2 = welcome("Pawan");
console.log(newText2); 
