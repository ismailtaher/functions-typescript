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
