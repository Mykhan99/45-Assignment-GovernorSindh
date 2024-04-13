"use strict";
//Q3.Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.//
Object.defineProperty(exports, "__esModule", { value: true });
let personName = "erum yousuf";
console.log("lowercase : " + personName.toLowerCase());
console.log("UPPERCASE : ", personName.toUpperCase());
console.log("Titlecase : ", personName.replace(/\b\w/g, c => c.toUpperCase()));
