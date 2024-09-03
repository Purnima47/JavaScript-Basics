// JS -> SINGLE THREADED.

const at = new Promise((resolve, reject) => {
    let decide = true;

    if (decide) {
        // to pass more than one parameter we need to pass it as objects.
        resolve({ msg: ":-)", decision: decide });
    } else {
        reject({ msg: ":-(", decision: decide });
    }
});

// actions on the promise

at.then(({ msg, decision }) => {
    console.log("Msg ", msg + " Decision", decision);
    console.log("Iphone mil gya");
}).catch(({ msg, decision }) => {
    console.log("Msg ", msg + "Decision", decision);
    console.log("Purana phone hi best tha");
}).finally(() => console.log("......"));


const f1Promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() > 0.5) {
            resolve("Friend 1: We will do party");
        } else {
            reject("Friend 1: Have work");
        }
    }, 3000);
});

const f2Promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() > 0.5) {
            resolve("Friend 2: We will do party");
        } else {
            reject("Friend 2: Headache");
        }
    }, 3000);
});

const f3Promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() > 0.5) {
            resolve("Friend 3: We will do party");
        } else {
            reject("Friend 3: Abba nhi manenge");
        }
    }, 3000);
});

// if all promises are fulfilled --> then otherwise catch
Promise.all([f1Promise, f2Promise, f3Promise]).then((msg) => {
    console.log("Msg: ", msg);
    console.log("Yeah!");
}).catch((msg) => {
    console.log("Msg: ", msg);
    console.log(":-(");
});


// // if any one of the promises is fulfilled  --> then otherwise catch.
// Promise.any([f1Promise, f2Promise, f3Promise]).then((result) => {
//     console.log("Result ", result);
//     console.log("Yeah!");
// }).catch((msg) => {
//     console.log("Msg: ", msg);
//     console.log(":-(");
// });
