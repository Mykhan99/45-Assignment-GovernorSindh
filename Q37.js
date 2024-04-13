"use strict";
/*Q 37.	Large Shirts: Modify the make_shirt() function so that shirts are large by default
with a message that reads I love TypeScript.
Make a large shirt and a medium shirt with the default message,
and a shirt of any size with a different message.*/
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt(size = 'Large', message = 'I love TypeScript') {
    console.log(`The shirt size is ${size} and the message printed on it is: "${message}"`);
}
// Call the function with default values
make_shirt(); // Large shirt with default message
make_shirt('Medium'); // Medium shirt with default message
// Call the function with different values
make_shirt('Small', 'Hello, World!'); // Small shirt with custom message
