"use strict";
/*17.Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
and you have space for only two guests.
Start with your program from Exercise 16. Add a new line that prints a message saying that you
can invite only two people for dinner.
 Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name
 from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
Print a message to each of the two people still on your list, letting them know they’re still invited.
 Remove the last two names from your list, so you have an empty list. Print your list to make
 sure you actually have an empty list at the end of your program.*/
Object.defineProperty(exports, "__esModule", { value: true });
var guestList = [`Haniya`, `Hina`, `Alya`, `Rahat`, `Saba`];
guestList.forEach((ab) => {
    console.log(`Dear ${ab} \n Our new table wont arrived so we are able to invite only two people`);
});
//Remove guests from your list one at a time until only two names remain in your list.
while (guestList.length > 2) {
    const removedguest = guestList.pop();
    console.log(`\nSorry ${removedguest} \n we are not been able to invite you.`);
}
;
//Print a message to each of the two people still on your list, letting them know they’re still invited.
console.log(`\n Invitation message to the remaining two guest.`);
guestList.forEach((abc) => {
    console.log(`Dear ${abc} \n You are still invited for the dinner.`);
});
// Remove the last two names from the list to have an empty list
guestList.pop();
guestList.pop();
// Print the empty list
console.log("\nUpdated guest list:", guestList);
