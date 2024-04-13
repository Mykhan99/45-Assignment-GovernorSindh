"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*Q21 21.	They think of something you could store in a TypeScript Object.
Write a program that creates Objects containing these items.*/
//var mountains = ["Mount Everest", "K2", "Kangchenjunga", "Lhotse", "Makalu"];
var mountains1 = [
    { Name: `MountEverest`, location: `Nepal`, Height: 777850 },
    { Name: `K2`, location: `Pakistan`, Height: 758000 },
    { Name: `Kangchenjunga`, location: `China`, Height: 65855 },
    { Name: `Inda`, location: `Makalu`, Height: 55850 }
];
//Print infom about each mountains
mountains1.forEach((mountain) => {
    console.log(`MountainName: ${mountain.Name}`);
    console.log(`Mountain Location: ${mountain.location}`);
    console.log(`Mountain Height ${mountain.Height}`);
    console.log();
});
