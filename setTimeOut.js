// print 1 to 10 with delay of 1sec after each number gets printed

// for (let i = 1; i <= 10; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, i * 1000);
// }

// for (let i = 10; i >= 1; i--) {
//     setTimeout(function () {
//         console.log(i);
//     }, i * 500);
// }

for (let i = 1; i <= 10; i++) {
    setTimeout(function () {
        console.log(11 - i);
    }, i * 1000);
}

// setTimeout(function () {
//     console.log("hello");
// }, 2000);

// function hello() {
//     console.log("hello");
// }

// function mello() {
//     console.log("mello");
// }

// setTimeout(hello, 3000);
// setTimeout(mello, 1000);