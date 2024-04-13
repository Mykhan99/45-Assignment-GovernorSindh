/*Q26 26.	Alien Colors #2: Choose a color for an alien as you did in Exercise 25, 
  and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points 
  for shooting the alien.
• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
• Write one version of this program that runs the if block and another that runs the else block.*/

//Version 1

var alienColor: string= `green`;
 if (alienColor ===`green`)
 {
    console.log("If alien color is green Player will earn 5 points for shooting the alien");

 } else{
    console.log ("If alien color is not green player will earn 10 points for shooting the alien")
 }
 
 //Version 2
  var alien_color: string=`red`;
  if (alien_color===`red`)
    {
        console.log("if alien color is red then Player will earn 15 points for shooting the alien")
    } else {
        console.log ("If alien color is not red then Player will 20 Points for shooting the alien")
    } ;
 