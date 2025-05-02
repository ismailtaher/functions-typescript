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
let bands: string[] = [];
bands.push("van halen");
//bands.push(false);

//
//Tuple
//

let myTuple: [string, number, boolean] = ["Ismail", 42, true];

let mixed = ["Mirza", 1, false];

mixed = myTuple;

//myTuple = mixed;

//myTuple[3] = 42;

//myTuple[2] = 42

//
// Objects
//

let myObj: object;
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

type guitarist = {
  name?: string;
  active: boolean;
  album: (string | number)[];
};

let evh: guitarist = {
  name: "Eddie",
  active: false,
  album: [1984, 5150, "OU812"],
};

let JP: guitarist = {
  name: "Jimmy",
  active: true,
  album: ["I", "II", "IV"],
};

evh = JP;

const greetGuitarist = (Guitarsist: guitarist) => {
  //if (Guitarsist.name) { or we could use narrowing
  return `Hello ${Guitarsist.name?.toUpperCase()}!`;
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

enum Grade {
  U,
  D,
  C,
  B,
  A,
}

console.log(Grade.U);
