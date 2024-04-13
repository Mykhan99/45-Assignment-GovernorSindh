/* 44.	Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
The function should have one parameter that collects as many items as the function call provides, 
and it should print a summary of the sandwich that is being ordered. 
Call the function three times, using a different number of arguments each time.*/

function make_sandwich(...items: string[]): void {
    console.log("Sandwich summary:");
    console.log("Bread");
    for (let item of items) {
        console.log(item);
    }
    console.log("Bread");
}

// Call the function three times with a different number of arguments each time
make_sandwich('Turkey', 'Lettuce', 'Tomato');
make_sandwich('Ham', 'Cheese');
make_sandwich('Peanut Butter', 'Jelly');
