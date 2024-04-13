/* Q 45.	Cars: Write a function that stores information about a car in a Object. 
The function should always receive a manufacturer and a model name. 
It should then accept an arbitrary number of keyword arguments. 
Call the function with the required information and two other name-value pairs, 
such as a color or an optional feature. 
Print the Object that’s returned to make sure all the information was stored correctly.*/

function car_info(manufacturer: string, model: string, ...extras: { [key: string]: any }[]): { manufacturer: string, model: string, [key: string]: any } {
    let car: { manufacturer: string, model: string, [key: string]: any } = {
        manufacturer: manufacturer,
        model: model
    };

    for (let extra of extras) {
        for (let key in extra) {
            car[key] = extra[key];
        }
    }

    return car;
}

// Call the function with required information and additional key-value pairs
let car_details = car_info('Toyota', 'Corolla', { color: 'Blue' }, { year: 2024 });

// Print the object to make sure all the information was stored correctly
console.log(car_details);
