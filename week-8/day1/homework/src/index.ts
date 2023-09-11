// Homework Exercises

// 1. For each of these values, what type will the TypeScript compiler infer?
let a = 118;
// A: is numerical so is number
// : number

let b = "Thieves";
// A: b is a piece of text is a 'string'
// : string

let c = [true, false, false];
// A: this is a comparison is a boolean[]

let d = { age: 2 };
// A:  this  an object declaration has a property for its value
// {age:any}

let e = [3];
// A: this is an array of number  so is number[]
// : number[]

let f;
// A: in this case is just a var  will compile as type :  any

let g = [];
// A: same as before is a type of any
// : any[] = array

// 2. What are the compilation errors in each of the following code snippets?

let song: {
  title: string;
  releaseYear: number;
} = {
  title: "Lose Yourself",
  releaseYear: 1993,
};

console.log(`this is working\n ${song.title} ${song.releaseYear}`);
//passed

// A: in this case reason is you are defining song with 2 keys but only giving 1 key as your output

let prices: (number | string)[] = [100, 200, 300];
prices[0] = "$100";

// A: in this case you are assigning an array of  number
// and you are calling a string | number so you need to
// define the dynamic array

function myFunc(a: number, b: number): number {
  return a;
}

// A: to retrieve the number from the function you need to return the number
