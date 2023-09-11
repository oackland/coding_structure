// 1. Given the data below, define a type alias for representing users.
var users = [
    {
        name: "Shoha Tsuchida",
        age: 99,
        company: "Coding Temple",
    },
    {
        name: "Dylan Katina",
        age: 99,
    },
];
// 2. Define a type for representing the days of week. Valid values are “Monday”, “Tuesday”, etc.
// 3. Given the Person class below, create a getter for getting the full name of a person.
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Person;
}());
// 4. Create a new class called "Employee" that extends "Person" and adds a new property called salary.
// 5. Given the data below, define an interface for representing employees:
// HINT: You'll need 2 interfaces.
var employee = {
    name: "Christian Askew",
    salary: 1000000,
    address: {
        street: "Thieves st",
        city: "Seattle",
        zipCode: 98101,
    },
};
