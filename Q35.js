"use strict";
/*Q 35.	Animals: Think of at least three different animals that have a common characteristic.
Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
• Modify your program to print a statement about each animal, such as A dog would make a great pet.
• Add a line at the end of your program stating what these animals have in common.
You could print a sentence such as Any of these animals would make a great pet!*/
Object.defineProperty(exports, "__esModule", { value: true });
//store names of an animals
let animalNames = [`Rabit`, `Parrot`, `Cat`];
// Print the names of each animal
console.log("Names of the animals:");
for (let mypet of animalNames) {
    console.log(mypet);
}
// Print a statement about each animal
console.log("\nStatements about each animal:");
for (let mypet of animalNames) {
    console.log(`A ${mypet.toLowerCase()} would make a great pet.`);
}
// Print what these animals have in common
console.log("\nWhat these animals have in common:");
console.log("Any of these animals would make a great pet!");
