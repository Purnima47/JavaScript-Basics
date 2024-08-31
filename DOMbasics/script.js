let div = document.querySelector(".one");

setTimeout(function () {
    div.innerHTML = "Anshi"
}, 2000);

// EVENT LISTENERS
div.addEventListener("mouseenter", function () {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    console.log(r, g, b);

    div.style.backgroundColor = `rgb(${r},${g},${b})`;
});

div.addEventListener("mouseleave", function () {
    div.style.backgroundColor = "pink";
});

