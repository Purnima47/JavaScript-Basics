// There are three types of scopes ->
// Global Scope, Function Scope(Local Scope), Block Scope

// GLOBAL SCOPE

var name = "Anshika"; // global scope variable

console.log(name);

function func() {
    console.log(name);

}

// FUNCTION SCOPE

function fun() {
    var num = 10;
    console.log(num);
}

fun();
// console.log(num);  // error -->  num is not defined 


// BLOCK SCOPE

{
    // Block of code
    var x = 10;  //var is not block scope.
    let y = 20
    console.log(x);
    console.log(y);
}

console.log(x);
// console.log(y);  // error 
