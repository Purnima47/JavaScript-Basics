// exceptions are handled by try catch

try {
    let obj = undefined;
    console.log(obj.name);
} catch (error) {
    console.log("Exception handled");
} finally {
    console.log("This will always executed");
}