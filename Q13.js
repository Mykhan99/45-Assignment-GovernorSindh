"use strict";
/*13.	Your Own Array: Think of your favorite mode of transportation,
such as a motorcycle or a car, and make a list that stores several examples.
Use your list to print a series of statements about these items,
such as “I would like to own a Honda motorcycle.”*/
Object.defineProperty(exports, "__esModule", { value: true });
let favoTransport = [`Honda.`, `Toyota.`, `Bike.`];
let messagefav = ` I would like to buy `;
for (let ab = 0; ab < favoTransport.length; ab++)
    console.log(messagefav + favoTransport[ab]);
/*const guestList: string[] = ["Amir", "Bilal", "Asad"];
for(let ab=0; ab< guestList.length; ab++)

console.log(`Dear ${guestList[ab]}, you are cordially invited to dinner. We would be honored to have your presence.`);
;*/
/*const guestList: string[] = ["Amir", "Bilal", "Asad"];
guestList.forEach((erum) => {
    console.log(`Dear ${erum}, you are cordially invited to dinner. We would be honored to have your presence.`);
});*/
/*const oldArr:string[] = ["item 1", "item 2", "item 3"];
const newArr:string[] = [];
 
oldArr.forEach(item => {
   newArr.push(item)
})

newArr.forEach(item1 => {
    console.log(item1);
 })
console.log(newArr[0]);*/
/*const arr:string[] = ['David', 'Samuel', 'Joan', 'Claire']
 
arr.forEach((name, index, array) => {
    console.log(`Welcome ${name}, your index is ${index}`)
    console.log(array)
})*/
