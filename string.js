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

// string to int:
let s = "1245";
let n = Number(s);
// int to string:
let str = n.toString();
console.log(n, str);

// to find the ascii value of a character
for (let i = 0; i < s.length; i++) {
    const el = s.charCodeAt(i);
    console.log(el);
}
