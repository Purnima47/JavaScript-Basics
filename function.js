function oneToN(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}

// Math.cbrt(5);  //cube root
// Math.log10(100);

function func() {
    console.log(arguments);  // [Arguments] { '0': 1, '1': 6, '2': 843, '3': 10, '4': 878564 } --> o/p

}

func(1, 6, 843, 10, 878564);

// ARROW FUNCTIONS
var hello = () => console.log("hello world");

hello();

var sum = (a, b) => a + b;
console.log(sum(5, 7));

var process = (a, b) => {
    console.log("process");
    return a * b;
}

// inside the normal function arguments works properly but not in the arrow function.

console.log(process(46, 401));

// IIFE(Immediately Invoke Function Expression)

// Anonymous function
(function () {
    console.log("hii");
})();

