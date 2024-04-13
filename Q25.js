"use strict";
/*Q25 25.	Alien Colors #1: Imagine an alien was just shot down in a game.
Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color is green. If it is, print a
message that the player just earned 5 points.
• Write one version of this program that passes the if test and another that fails.
(The version that fails will have no output.)*/
Object.defineProperty(exports, "__esModule", { value: true });
//FAIL.TS
let alienColor = 'red';
if (alienColor === 'green') {
    console.log("The player just earned 5 points.");
}
else {
    console.log("The Alien colors is not green.");
}
//PASS.TS
if (alienColor === 'red') {
    console.log("The Alien color is Red.");
    console.log("The player just earned 5 points.");
}
