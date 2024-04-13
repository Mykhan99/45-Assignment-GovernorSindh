/*Q24 24.	More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
If you want to try more comparisons, write more tests. Have at least one True and one False result 
for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array*/

// Tests for equality and inequality with strings
let fruit: string = 'apple';

console.log("Is fruit == 'apple'? Prediction: True.");
console.log(fruit == 'apple');

console.log("Is fruit !==`banana`? Prediction: True.");
console.log(fruit!==`banana`);

console.log("Is fruit ==`banana`? Prediction: false");
console.log(fruit== `banana`);

console.log("Is fruit != 'apple'? Prediction: False.");
console.log(fruit != 'apple');


// Tests using the lower case function
let color: string = 'Blue';

console.log("Is color.toLowerCase() == 'blue'? Prediction: True.");
console.log(color.toLowerCase() == 'blue');

console.log("Is color.toLowerCase() == 'blue'? Prediction: False.");
console.log(color.toLowerCase() == 'red');

// Numerical tests
let number: number = 10;

console.log("Is number == 10? Prediction: True.");
console.log(number == 10);

console.log("Is number != 5? Prediction: True.");
console.log(number != 5);

console.log("Is number > 5? Prediction: True.");
console.log(number > 5);

console.log("Is number < 20? Prediction: True.");
console.log(number < 20);

console.log("Is number >= 10? Prediction: True.");
console.log(number >= 10);

console.log("Is number <= 10? Prediction: True.");
console.log(number <= 10);

// Tests using "and" and "or" operators
let x: number = 5;
let y: number = 10;

console.log("Is x > 3 and y < 15? Prediction: True.");
console.log(x > 3 && y < 15);

console.log("Is x > 5 or y < 5? Prediction: True.");
console.log(x > 4 || y < 5);

// Test whether an item is in an array
var pets = ['dog', 'cat', 'rabbit'];
console.log("Is 'dog' in the pets array? Prediction: True.");
console.log(pets.includes('dog'));
// Test whether an item is not in an array
console.log("Is 'bird' not in the pets array? Prediction: True.");
console.log(!pets.includes('bird'));



