"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*42.Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding
the phrase the Great to each magician’s name. Call show_magicians() to see that the list
 has actually been modified.*/
// Define an array of magician's names
let magician_names = ['David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];
// Call the make_great function
make_great(magician_names);
// Call the show_magicians function to see the modified list
show_magicians(magician_names);
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `the Great ${magicians[i]}`;
    }
}
