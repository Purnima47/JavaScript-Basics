// map --> to change the elements of array(map)

let arr = [1, 5, 9, 13];

function twice(ele) {
    return 2 * ele;
}

function square(ele) {
    return ele * ele;
}

// method - 1
let brr = arr.map(square);
console.log(brr);

// method - 2
console.log(brr.map(function (ele) {
    return Math.sqrt(ele);
}));

// use arrow function to write function 
// method - 3
console.log(arr.map((ele) => {
    return Math.abs(ele - 5);
}));

// short hand method
// method - 4
console.log(brr.map(ele => ele - 1));


// FILTER 

// filter out even numbers
let array = [3, 10, 51, 78];
console.log(array.filter(el => el % 2 == 0));


// REDUCE
let res = array.reduce((a, b) => a ** b);
console.log(res);


// SORT
let arr2 = [-2, -5, -1, -10];
console.log(arr2.sort()); // galat sorting deta hai[NEGATIVE NUMBER KE LIYE] ..so use custom sorting
console.log(arr2.sort((a, b) => (a - b))); // actual sorting
console.log(arr2.sort((a, b) => (b - a)));  // using comparator (custom sorting)

// absolute sort
console.log(arr2.sort((a, b) => Math.abs(a) - Math.abs(b)));


