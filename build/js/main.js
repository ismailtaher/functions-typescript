"use strict";
//
// Arrays
//
let stringArr = ["one", "hey", "Ismail"];
let guitars = ["Strat", "Les Paul", 5150];
let mixedData = ["EVH", 1984, true];
//stringArr[0] = 42;
stringArr[0] = "John";
//stringArr.push(42);
stringArr.push("hey");
guitars[0] = 1984;
guitars.unshift("Jim");
//stringArr = guitars;
guitars = stringArr;
let test = [];
let bands = [];
bands.push("van halen");
//bands.push(false);
//
//Tuple
//
let myTuple = ["Ismail", 42, true];
let mixed = ["Mirza", 1, false];
mixed = myTuple;
//myTuple = mixed;
//myTuple[3] = 42;
//myTuple[2] = 42
//
// Objects
//
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: "Ismail",
    prop2: true,
};
//exampleObj.prop2 = 42
exampleObj.prop2 = false;
let evh = {
    name: "Eddie",
    active: false,
    album: [1984, 5150, "OU812"],
};
let JP = {
    name: "Jimmy",
    active: true,
    album: ["I", "II", "IV"],
};
evh = JP;
const greetGuitarist = (Guitarsist) => {
    var _a;
    //if (Guitarsist.name) { or we could use narrowing
    return `Hello ${(_a = Guitarsist.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()}!`;
    //}
    // return `Hello!`
};
console.log(greetGuitarist(JP));
//
// Interface
//
/* interface Musician {
  name: string;
  active?: boolean;
  albums: (string | number)[];
}
 */
//
// Enums
//
// Unlike most TypeScript features, Enums are not type-level addition to JavaScript but something added to the language at runtime
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["D"] = 1] = "D";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["B"] = 3] = "B";
    Grade[Grade["A"] = 4] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
