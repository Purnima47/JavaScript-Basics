// SQUARE 1 : 
// mouseenter --> random no. generate (0 to 99)
// mouseleave --> remains one

let sq1 = document.querySelector("#square1");

sq1.addEventListener("mouseenter", function () {
    let num = Math.floor(Math.random() * 100);
    sq1.innerHTML = `${num}`;
})

sq1.addEventListener("mouseleave", function () {
    let num = 1;
    sq1.innerHTML = `${num}`;
})

// SQUARE 2 :
// mouseenter --> first -> green, second -> red

let sq2 = document.querySelector("#square2");
let color = "green"

sq2.addEventListener("mouseenter", function () {
    sq2.style.backgroundColor = color;
    color = color == "green" ? "red" : "green";
})

sq2.addEventListener("mouseleave", function () {
    sq2.style.backgroundColor = "black";
})

// SQUARE 3: 
// mouseenter --> random color

let sq3 = document.querySelector("#square3");

sq3.addEventListener("mouseenter", function () {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    sq3.style.backgroundColor = `rgb(${r},${g},${b})`;
});

sq3.addEventListener("mouseleave", function () {
    sq3.style.backgroundColor = "black";
});


// SQUARE 4 : 

let sq4 = document.querySelector("#square4");

sq4.addEventListener("click", function () {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    sq1.style.backgroundColor = `rgb(${r}, 255, 255)`;
    sq2.style.backgroundColor = `rgb(255, ${g}, 255)`;
    sq3.style.backgroundColor = `rgb(255, 255, ${b})`;
});

sq4.addEventListener("mouseleave", function () {
    sq1.style.backgroundColor = "black";
    sq2.style.backgroundColor = "black";
    sq3.style.backgroundColor = "black";
});

// move the cursor.

let main = document.querySelector("#main");
let cursor = document.querySelector("#cursor");

main.addEventListener("mousemove", function (details) {
    cursor.style.left = details.x + "px";
    cursor.style.top = details.y + "px";
})


