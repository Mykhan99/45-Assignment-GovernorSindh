/*29.	Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent 
if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array. 
If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/


var favFruits: string [] =[`Apple` ,`Cheery`,`Banana`];

//• Make a array of your three favorite fruits and call it favorite_fruits.
if (favFruits.includes(`Apple`)){
    console.log("I really like Apple");
}
if (favFruits.includes(`Banana`)){
    console.log("I Really like Banana");
}
if(favFruits.includes(`Cheery`)){
    console.log("I really like Cherry");
}
if(favFruits.includes(`grapes`)){
    console.log("I really like grapes");
}
else{ console.log("I do not like grapes");
}

if(favFruits.includes(`Mango`)){
    console.log("I really like Mango");
}
else{ console.log("I do not like Mango");
}
