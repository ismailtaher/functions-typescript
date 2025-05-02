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

userName = "Abdullah";

userName = "Ismail";
