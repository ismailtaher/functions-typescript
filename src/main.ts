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

//
// Optional Parameters
//
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};

logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));

const sumAll = (a: number = 10, b: number, c: number = 2): number => {
  return a + b + c;
};
logMsg(sumAll(2, 3));
logMsg(sumAll(2, 3, 1));
logMsg(sumAll(undefined, 3));

//
// Reset Parameters
//

const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
};

logMsg(total(1, 2, 3, 4));

//
// never type
//

// throw error
const createError = (errMsg: string) => {
  throw new Error(errMsg);
};

// infinite loop
const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;
    if (i > 100) break; // to break the endless loop
  }
};

// custom type guard
const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};

// use of the never type

const numberOrString = (value: number | string): string => {
  if (typeof value === "string") return "string";
  if (isNumber(value)) return "number";
  return createError("This should never happen!");
};
