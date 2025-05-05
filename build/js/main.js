"use strict";
// Type Aliases
// Difference between type and interface
//interface PostId = stringOrNumber;  gives error
// Literal Types
let myName;
//myName = "Mirza"
let userName;
//userName = "Abdullah";
userName = "Ismail";
//
// Functions
//
// defining output type
const add = (a, b) => {
    return a + b;
};
// function that doesn't return anything (void)
const logMsg = (message) => {
    console.log(message);
};
logMsg("hello!");
logMsg(add(2, 3));
// normal function
let subtract = function (c, d) {
    return c - d;
};
/* interface mathFunction {
  (a: number, b: number): number;
} */
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 2));
//
// Optional Parameters
//
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(sumAll(2, 3));
logMsg(sumAll(2, 3, 1));
logMsg(sumAll(undefined, 3));
//
// Reset Parameters
//
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3, 4));
//
// never type
//
// throw error
const createError = (errMsg) => {
    throw new Error(errMsg);
};
// infinite loop
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break; // to break the endless loop
    }
};
// custom type guard
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
// use of the never type
const numberOrString = (value) => {
    if (typeof value === "string")
        return "string";
    if (isNumber(value))
        return "number";
    return createError("This should never happen!");
};
