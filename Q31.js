"use strict";
/*Q31 No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed.*/
Object.defineProperty(exports, "__esModule", { value: true });
var userNames = [`Admin`, `Saba`, `Aliya`, `Rahat`];
if (userNames.length === 0) {
    console.log("We need to find some users");
}
else {
    for (let abc of userNames)
        if (abc === "Admin") {
            console.log("Hello admin would you like to see some status report?");
        }
        else {
            console.log(`Hello ${abc} Thankyuou for logging in`);
        }
}
//Remove all of the user from the list
userNames = [];
if (userNames.length === 0) {
    console.log("We need to find some users");
}
