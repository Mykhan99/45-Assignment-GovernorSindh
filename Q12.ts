/*12.	Greetings: Start with the array you used in Exercise 11, but instead of just printing each/
 person’s name, print a message to them. The text of each message should be the same, 
but each message should be personalized with the person’s name.*/

let friend: string [] =  [`Rahat` , `Alya` , `Hina` , `Haniya`];
let message1= ` How is the weather?`;

for(let abc=0; abc < friend.length; abc++)
console.log(friend[abc] + message1);