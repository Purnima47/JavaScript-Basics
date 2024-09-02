// function ke parameter me agr function pass kr skte hai aur return me bhi function aa skta hai toh use
// hum HIGHER ORDER FUNCTION kehte hai.

function operation(operatorFn, a, b) {
    return operatorFn(a, b);
}

// operation --> HOF

function add(a, b) {
    return a + b;
}

let res = operation(add, 10, 5);
console.log(res);

// getGreet --> HOF
function getGreet() {
    return function () {
        console.log("Hii");

    }
}

let greetFn = getGreet();
greetFn();