// ARRAYS

let arr = [1, 5, 8];
arr.push(9);
arr.unshift(10);  // insert element at the start of the array  (add at first)
arr.shift(); // remove first element.
console.log(arr);


// cosnt arr
const arr2 = [5, 3, 4];
// we can add remove element but we can change its type i.e. currently it is an array but we can't change it to number type.
// arr2 = 5;  //ERROR
// but if we are assigning const to other than array then we can't make any changes to it. It remains const throughout.

console.log(arr2);

// array --> different data types bhi ho skte h (number, boolean, array, decimal, etc).
// typeof array --> object

// concatenate two arrays
// let res = arr.concat(arr2);
// or 
let res = [...arr, ...arr2]; // in this more than two arrays can be concatenated.

console.log(res);


// STRING --> ARRAY
let s = "Hi I AM a String";
let stringArr = s.split(" ");
console.log(stringArr);

// ARRAY --> STRING
let str = stringArr.join("");
console.log(str);
console.log(stringArr.toString().split(",").join(""));


// Slicing of arrays (similar to strings)  --> doesn't change or modify any changes in arr
console.log(arr.slice(2));

// Splicing --> which modifies the given array
let num = [1, 4, 6, 7, 0, 2, 3];
let remove = num.splice(2, 2); // from second idx splice two elements. Therefore [6,7] is removed.
console.log(remove);
console.log(num);

// to add more number you can add your numbers in third parameter of slice.
let r = num.splice(1, 1, 84, 64, 10, 46); //  84, 64, 10, 46 these has been added to num.
console.log(r);
console.log(num);


// Reverse an array 
num.reverse();
console.log(num);