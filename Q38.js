"use strict";
/*Q 38- Cities: Write a function called describe_city() that accepts the name of a
city and its country. The function should print a simple sentence, such as Karachi is in Pakistan.
 Give the parameter for the country a default value. Call your function for three different cities,
 at least one of which is not in the default country.*/
Object.defineProperty(exports, "__esModule", { value: true });
//Write a function called describe_city()
function describeCity(city, country = `Default Country`) {
    console.log(`${city} ,is the famous city of ${country}`);
}
/*Call your function for three different cities,
 at least one of which is not in the default country.*/
describeCity(`Karachi`, `Pakistan.`);
describeCity(`London`, `United Kingdom.`);
describeCity(`NewYork`, `USA.`); //this will be used as default country
