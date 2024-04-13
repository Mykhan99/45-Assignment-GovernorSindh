"use strict";
/*Q23 23.	Conditional Tests: Write a series of conditional tests.
Print a statement describing each test and your prediction for the
results of each test. Your code should look something like this:

let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
• Look closely at your results, and make sure you understand
why each line evaluates to True or False.
• Create at least 10 tests. Have at least 5 tests evaluate to
// True and another 5 tests evaluate to False.*/
Object.defineProperty(exports, "__esModule", { value: true });
let car = `subaru`;
//test1 
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
//test2
console.log("Is car == `Toyota`? I predict false. ");
console.log(car == `Toyota`);
// Test 3: Is car === 'subaru'? Prediction: True
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru');
// Test 4: Is car === 'Subaru'? Prediction: False
console.log("Is car === 'Subaru'? I predict False.");
console.log(car === 'Subaru');
// Test 5: Is car.length > 5? Prediction: False
console.log("Is car.length < 5? I predict False.");
console.log(car.length < 5);
// Test 6: Is car.length < 7? Prediction: True
console.log("Is car.length < 7? I predict True.");
console.log(car.length < 7);
// Test 7: Is car.toUpperCase() == 'SUBARU'? Prediction: True
console.log("Is car.toUpperCase() == 'SUBARU'? I predict True.");
console.log(car.toUpperCase() == 'SUBARU');
// Test 8: Is car.toLowerCase() == 'subaru'? Prediction: True
console.log("Is car.toLowerCase() == 'subaru'? I predict True.");
console.log(car.toLowerCase() == 'subaru');
// Test 9: Is car.length == 6? 
console.log("Is car.length == 6? I predict true.");
console.log(car.length == 6);
// Test 10: Is car.length != 6? 
console.log("Is car.length != 6? I predict false.");
console.log(car.length != 6);
