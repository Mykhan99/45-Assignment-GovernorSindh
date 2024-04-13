/*Q27 27.	Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.
• If the alien is yellow, print a message that the player earned 10 points.
• If the alien is red, print a message that the player earned 15 points.
• Write three versions of this program, making sure each message is printed for the appropriate color alien.*/

//Version 1
var alienColor: string= `green`;
 if(alienColor===`green`){
    console.log("If alien color is green then player will earn 5 points for shooting an alien")
 } else{ 
  console.log("if alien color is not green then player wil earn 10 Points for shooting an alien")
 };
  //Versio 2

  var alien_color: string=`red`;
  if (alien_color===`red`){
    console.log("If alien color is red then player will 10 points for shooting an alien")
  }else{
    console.log("If alien is not red then player will earn 15 points for shooying an alien")
   };

   //Version 3

   var aalienColor: string= `Yellow`;
   if(aalienColor===`Yellow`){
    console.log("if aalien color is Yellow then player will get 15 points for shooting n aalien")
   } else{
    console.log("If alien color is not Yellow then player will get 20 points for shooting an aalien")
   };