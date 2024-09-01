// js me ek ek line compile hokr run hoti hai.
// var  and let me scope ka difference aata hai.

// REDEFITNITION of variable is possible in JS

var a = 10;
console.log(a);

var a = 220;
console.log(a);

// typeof
console.log(typeof (a));

// tripleEqualTo (===) : yeh value aur type dekhta hai but  (==) sirf value dekhta hai type nhi.

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

// FOR OF LOOP
for (const el of arr) {
    console.log(el);
}
// normal for loop me hum array ki values change kr skte hai pr forof loop and forEach loop me nhi q ki (el) copies laata hai har ek ki.


// for each loop
// callbackfn(value: number, index: number, array: number[]): void
// array itself print hota hai 3rd parameter me. (whi array print hoga jisme forEach loop lga hai..if you use other name then also it will print that array only.. (IMP))
arr.forEach((ele, idx, array) => {
    console.log(idx, ele, array);
});


// falsy value --> false condn, 0, false, null
// truthy value --> other thaan falsy all are truthy (ex: 'null', '0', etc).

// strings --> for each doesn't work for strings

// slice(i)  -> substring from index i to end
// slice(i,j) -> substring from index i to index j-1

// STRING --> ARRAY
let s = "Hi I AM a String";
let stringArr = s.split(" ");
console.log(stringArr);

// ARRAY --> STRING
let str = stringArr.join("");
console.log(str);

// TEMPLATE LITERALS (use backticks , variable -> ${})


// initialize 2-D Array
let m = 10;
let n = 20;
let twoDArr = new Array(m).fill(0).map(() => new Array(n).fill(0));
console.log(twoDArr);

