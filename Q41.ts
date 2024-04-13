/*Q 41.	Magicians: Make a array of magician’s names. 
Pass the array to a function called show_magicians(),
which prints the name of each magician in the array.*/

// Define an array of magician's names
let magician_names: string[] = ['Yousuf', 'Umer', 'Ammar', 'Sheri'];

// Call the show_magicians function
show_magicians(magician_names);

function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(`The name of magician is ${magician}`);
    }
}


