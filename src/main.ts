// Type Aliases

type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitarist = {
  name?: string;
  active: boolean;
  albums: (string | number)[];
};

type userId = stringOrNumber;

// Difference between type and interface

//interface PostId = stringOrNumber;  gives error

// Literal Types
let myName: "Ismail";

//myName = "Mirza"

let userName: "Muhammad" | "Ismail" | "Mirza";

//userName = "Abdullah";

userName = "Ismail";

//
// Functions
//

// defining output type
const add = (a: number, b: number): number => {
  return a + b;
};

// function that doesn't return anything (void)
const logMsg = (message: any): void => {
  console.log(message);
};

logMsg("hello!");
logMsg(add(2, 3));

// normal function
let subtract = function (c: number, d: number): number {
  return c - d;
};

// creating a type for a function

type mathFunction = (a: number, b: number) => number;

/* interface mathFunction {
  (a: number, b: number): number;
} */

let multiply: mathFunction = function (c, d) {
  return c * d;
};

logMsg(multiply(2, 2));
