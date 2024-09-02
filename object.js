// object is kind of map/dictionary which have key and value pair.

let details = {
    name: "Anshika Tyagi",
    age: 20,
    percentage: "idk",
}

// console.log(details);
// console.log(details['name']); // or details.name

details['country'] = "India";
console.log(details);

// delete obj keys and obj itself
delete details.country;


//  for in loop
for (const key in details) {
    console.log(key, details[key]);
}

console.log(Object.keys(details));
console.log(Object.values(details));

// Get both key and values
console.log(Object.entries(details));

// Cloning an object using assign

const new_details = Object.assign({}, details);
console.log(new_details);

// cloning with some additional features
const new_details_1 = Object.assign({}, details, { role: "Developer" });
console.log(new_details_1);