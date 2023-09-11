"use strict";
console.log("testing");
const favNum = 3;
const students = ["omar", 3, "sam", 1];
const employee = {
    id: 1,
    name: "dylan",
    location: "USA",
};
const myNumOrStr = 1;
function KgToLbs(weight) {
    if (typeof weight === "string") {
        return parseInt(weight) * 2.2;
    }
    else {
        return weight * 2.2;
    }
}
console.log(KgToLbs("90"));
const KgToLbs2 = (weight) => {
    if (typeof weight === "string") {
        return parseInt(weight) * 2.2;
    }
    else {
        return weight * 2.2;
    }
};
const largeShirt = 25;
const smallShirt = 50;
const speed = 5;
const ride = {
    mph: speed !== null && speed !== void 0 ? speed : null,
};
ride.mph = 25;
console.log(ride);
const myInput = document.getElementById("myInput");
myInput.value;
const render = (document) => {
    if (typeof document === "string") {
        console.log(document);
    }
    else if (typeof document === "number") {
        console.log(document);
    }
};
class Team {
    constructor(myCity, myName) {
        this.printInfo = () => {
            return `The ${this.name} are from ${this.city}.`;
        };
        this.city = myCity;
        this.name = myName;
    }
}
const bulls = new Team("chicago", "bulls");
console.log(bulls.printInfo());
console.log(bulls instanceof Team);
class Team2 {
    constructor(_id, city, name) {
        this._id = _id;
        this.city = city;
        this.name = name;
        this.printInfo = () => {
            return `The ${this.name} are from ${this.city}.`;
        };
        this.printId = () => {
            return this._id;
        };
    }
}
const lakers = new Team2(0, "LA", "Lakers");
console.log(lakers.printInfo());
console.log(lakers.printId());
console.log(lakers.city);
class Team3 {
    constructor(_id, city, name, playerName, jerseyNum) {
        this._id = _id;
        this.city = city;
        this.name = name;
        this.playerName = playerName;
        this.jerseyNum = jerseyNum;
        this.printInfo = () => {
            return `${this._id} ${this.city} ${this.name}`;
        };
    }
}
const seahawks = new Team3(1, "seattle", "seahawks", "bobby wagner", 54);
