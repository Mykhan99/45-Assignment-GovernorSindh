/*Q32 .Checking Usernames: Do the following to create a program that simulates how websites 
ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the new usernames 
are also in the current_users list.
• Loop through the new_users list to see if each new username has already been used. If it has, 
print a message that the person will need to enter a new username. If a username has not been used,
 print a message saying that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/


//• Make a list of five or more usernames called current_users.
var userNames: string[] =[`Saba`, `Alya`, `Hina`,`Erum`,`Yousuf`];

/*• Make another list of five usernames called new_users. Make sure one or two of the new usernames 
are also in the current_users list*/

var newUsers: string[] =[`Rahat`, `omer`,`Ammar`,`Erum`, `Yousuf`];

/*• Loop through the new_users list to see if each new username has already been used. If it has, 
print a message that the person will need to enter a new username. If a username has not been used,
 print a message saying that the username is available.*/
 for (let newUser of newUsers) {
    let is_existing: boolean = false;
    
    for (let userName of userNames) {
        if (newUser === userName) {
           is_existing = true;
           break;
        }
    }
    
    if (is_existing) {
        console.log(`Sorry, the username '${newUser}' is already taken. Please choose a different one.`);
    } else {
        console.log(`Congratulations! The username '${newUser}' is available.`);
    }
}
