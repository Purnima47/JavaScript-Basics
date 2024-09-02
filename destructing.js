// task : to fetch the values out of arrays or objects and assign it to the variables.

// DESTRUCTING IN ARRAYS:

const nums = [1, 2, 6, 75, 10];
const [a, b, c] = nums;
console.log(a, b, c);
// O/P: 1 2 6

const arr = [1, 2];
const [x, y, z] = arr;
console.log(x, y, z);
// 1 2 undefined


// DESTRUCTING IN OBJECTS:

const person = {
    name: "Anshika Tyagi",
    age: 19,
    city: "Greater Noida"
}

// variable names must match with the key of the object
const { age, name, hobby } = person;

console.log(name, age, hobby);
// O/P : Anshika Tyagi 19 undefined