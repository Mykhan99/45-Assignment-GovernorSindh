"use strict";
/*16.	More Guests: You just found a bigger dinner table, so now more space is available. Think of three
 more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing
  people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
*/
Object.defineProperty(exports, "__esModule", { value: true });
var guestList = [`Haniya`, `Hina`, `Erum`, `Aliya`];
guestList.forEach((ab) => {
    console.log(`Dear  ${ab}, \n We would like to invite You for dinner, We are honoured to have your Presence. \n  With Thanks.`);
});
//you found a bigger dinner table.
console.log(`Now we have found a bigger table and we add some more guest`);
//Add one new guest to the beginning of your array.
guestList.unshift(`Rahat`);
//add one new guest to the end of your list.
guestList.push(`Saba`);
//Add one new guest to the middle of your array.
const midIndex = Math.floor(guestList.length / 2);
guestList.splice(midIndex, 0, "Asma");
guestList.forEach((ab) => {
    console.log(`Dear  ${ab}, \n We would like to invite You for dinner, We are honoured to have your Presence. \n  With Thanks.`);
});
