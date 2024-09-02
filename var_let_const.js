/** 
var: 
    1. It's used to define a variable
    2. it has fn scope but no block scope
    3. It is hoisted. 
*/

console.log(i); // doesn't give error --> gives undefined

var i = 1;


/**
 * let:
 *  1. No hoisting
 *  2. Has Block scope
 */

// console.log(x);  // gives error

let i = 5;

/**
 * const:
 *      1. scope is same as let.
 *      2. const variables are final can't be reassigned values.
 */

