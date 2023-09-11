// testing
console.log("testing");
// Type Aliases: Creating our own Type
type myStr = string;
type myNum = number;
type myArr = (string | number)[];
type myObj = {
  id: number;
  readonly name: string;
  location: string;
};
const favNum: myNum = 3;
const students: myArr = ["omar", 3, "sam", 1];
const employee: myObj = {
  id: 1,
  name: "dylan",
  location: "USA",
};
// Union Types: Can allow a variable to be one of many types (number | string)
type NumOrStr = number | string;
const myNumOrStr: NumOrStr = 1;

function KgToLbs(weight: NumOrStr): number {
  if (typeof weight === "string") {
    return parseInt(weight) * 2.2;
  } else {
    return weight * 2.2;
  }
}
console.log(KgToLbs("90"));
// TypeScript Arrow Function
const KgToLbs2 = (weight: NumOrStr): number => {
  if (typeof weight === "string") {
    return parseInt(weight) * 2.2;
  } else {
    return weight * 2.2;
  }
};
// Literal Types (exact)
type Quantity = 25 | 50 | 75 | 100;
const largeShirt: Quantity = 25;
const smallShirt: Quantity = 50;

// Nullish Coalescing Operator (??): We can fall back to a default value when dealing with null/undefined objects
const speed: number | null = 5;
const ride = {
  mph: speed ?? null,
};
ride.mph = 25;
console.log(ride);
// Type Assertions: specify a different type than the one inferred by the compiler.
// NOTE: There isn't any type conversion happening under the hood.
const myInput = document.getElementById("myInput") as HTMLInputElement;
myInput.value;
// The "unknown" type: We have to narrow down to a specific type before performing any operations
// It is preferred to use "unknown" over "any" bc it forces us to do some type checking
const render = (document: unknown): void => {
  if (typeof document === "string") {
    console.log(document);
  } else if (typeof document === "number") {
    console.log(document);
  }
};
// Creating Classes
class Team {
  city: string;
  name: string;
  constructor(myCity: string, myName: string) {
    this.city = myCity;
    this.name = myName;
  }
  printInfo = (): string => {
    return `The ${this.name} are from ${this.city}.`;
  };
}

const bulls = new Team("chicago", "bulls");
console.log(bulls.printInfo());
// typeof vs instanceof
console.log(bulls instanceof Team);
// private properties and accessing them
class Team2 {
  constructor(
    private _id: number,
    public city: string,
    public name: string,
  ) {}
  printInfo = (): string => {
    return `The ${this.name} are from ${this.city}.`;
  };
  printId = (): number => {
    return this._id;
  };
}
const lakers = new Team2(0, "LA", "Lakers");
console.log(lakers.printInfo());
console.log(lakers.printId());
console.log(lakers.city);
// Building a class with parameter properties: Preferred way

// Interfaces vs Types
/* They both establish a shape of an object and can be used interchangeably BUT
Its more conventional to implement Interfaces with Classes AND
Interfaces can also inherit from other Interfaces & Types, while Types cannot.
*/

// interface MUST be an object
type Player = {
  name: string;
  jerseyNum: number;
};
interface IPlayer {
  name: string;
  jerseyNum: number;
}

class Team3 {
  constructor(
    private readonly _id: number,
    public city: string,
    public name: string,
    public playerName: string,
    public jerseyNum?: number,
  ) {}
  printInfo = (): string => {
    return `${this._id} ${this.city} ${this.name}`;
  };
}

const seahawks = new Team3(1, "seattle", "seahawks", "bobby wagner", 54);
