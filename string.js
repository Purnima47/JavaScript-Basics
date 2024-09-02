// strings are immutable

// strings can be used to store sensitive information. (like passwords) --> gives protection
// easily to handle
// saves space

let first_name = "Anshika";
let last_name = "Tyagi";

let full_name = first_name.concat(last_name);
console.log(full_name);

// slicing
console.log(full_name.slice(-5));
console.log(full_name.slice(1, 4));
console.log(full_name.slice(-5, -1));

// split --> gives array of string
let sen = "ghs jkgnosng igoeg";
console.log(sen.split(" "));


