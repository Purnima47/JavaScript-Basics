async function getMsg() {
    return "Hello World";
}

// console.log(getMsg());  // O/P : Promise { 'Hello World' }
// when you make a function async then it returns PROMISE obj.

// getMsg().then(result => console.log(result)); // O/P : Hello World

// when we want to print the data sequential(if you are using setTimeout) then use async and await.
// For ex:
// BEFORE:

function getMsgWithDelay() {
    console.log("Starting");
    setTimeout(() => {
        console.log("Hello World");
    }, 2000);
    console.log("Ending");
}

// getMsgWithDelay();

// O/P : 
// Starting
// Ending
// Hello World

// but we want O/P as:
// Starting
// Hello World
// Ending

async function getMsgWithDelayAsyncAwait() {
    console.log("Starting");
    const msg = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello World");
        }, 2000);
    });
    let res = await msg;
    console.log(res);
    console.log("Ending");
}

// getMsgWithDelayAsyncAwait();