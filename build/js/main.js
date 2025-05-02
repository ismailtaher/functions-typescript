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
