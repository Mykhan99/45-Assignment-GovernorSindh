"use strict";
/*43.Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great()
 with a copy of the array of magicians’ names. Because the original array will be unchanged,
 return the new array and store it in a separate array. Call show_magicians() with each array to show
 that you have one array of the original names and one array with the Great added to each magician’s name.*/
Object.defineProperty(exports, "__esModule", { value: true });
// Define an array of magician's names
let magician_names = ['David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    let great_magicians = [];
    for (let magician of magicians) {
        great_magicians.push(`the Great ${magician}`);
    }
    return great_magicians;
}
// Call the make_great function with a copy of the array
let great_magicians = make_great([...magician_names]);
// Call the show_magicians function to display the original array
console.log("Original Magicians:");
show_magicians(magician_names);
// Call the show_magicians function to display the modified array
console.log("\nModified Magicians:");
show_magicians(great_magicians);
