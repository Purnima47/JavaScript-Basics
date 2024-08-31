// object is kind of map/dictionary which have key and value pair.

let details = {
    name: "Anshika Tyagi",
    age: 20,
    percentage: "idk",
}

// console.log(details);

// console.log(details['name']); // or details.name

//  for in loop
for (const key in details) {
    console.log(key, details[key]);
}