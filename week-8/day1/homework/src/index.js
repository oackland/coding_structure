// Homework Exercises
// 1. For each of these values, what type will the TypeScript compiler infer?
var a = 118;
// A: is numerical so is number
// : number
var b = 'Thieves';
// A: b is a piece of text is a 'string'
// : string
var c = [true, false, false];
// A: this is a comparison is a boolean[]
var d = { age: number };
// A:  this  an object declaration has a property for its value
// {age:any}
var e = [3];
// A: this is an array of number  so is number[]
// : number[]
var f;
// A:
var g = [];
// A:
// 2. What are the compilation errors in each of the following code snippets?
var song = {
    title: 'Lose Yourself'
};
// A:
var prices = [100, 200, 300];
prices[0] = '$100';
// A:
function myFunc(a, b) {
}
// A:
