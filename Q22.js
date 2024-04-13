"use strict";
/* Q22 22.	Intentional Error: If you haven’t received an array index error in one of your programs yet,
try to make one happen. Change an index in one of your programs to produce an index error.
Make sure you correct the error before closing the program.*/
Object.defineProperty(exports, "__esModule", { value: true });
var mountains1 = [
    { Name: `MountEverest`, location: `Nepal`, Height: 777850 },
    { Name: `K2`, location: `Pakistan`, Height: 758000 },
    { Name: `Kangchenjunga`, location: `China`, Height: 65855 },
    { Name: `Inda`, location: `Makalu`, Height: 55850 }
];
//Change an index in one of your programs to produce an index error.
console.log(`It will show error if i give wrong index No : ${mountains1[4]}`);
console.log();
//Make sure you correct the error before closing the program.
console.log(`We have corrected the error : `, mountains1[3]);
console.log();
//Print infom about each mountains
mountains1.forEach((mountain) => {
    console.log(`MountainName: ${mountain.Name}`);
    console.log(`Mountain Location: ${mountain.location}`);
    console.log(`Mountain Height ${mountain.Height}`);
    console.log();
});
