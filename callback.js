// callback fn --> ek aisa fn jo ek fn ke andar pass hota hai

function prod(a, b, c) {
    return a * b * c;
}

function fun(x, y) {
    let p = x(2, 6, 3);
    console.log(p - y);
}

fun(prod, 7);