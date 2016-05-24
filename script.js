"use strict";

let reverse = () => {};

//  Supporting resources:
//    - http://exploringjs.com/es6/ch_destructuring.html
//    - http://exploringjs.com/es6/ch_tail-calls.html
document.addEventListener("DOMContentLoaded", () => {
    function g([head, ...tail], _="") {
        if (!head) return _;
        return g(tail, `${head || ""}${_}`);
    }

    function f(...words) {
        return !!words
            ? words[0].split(",").reverse().map((word) => { return g(word); }).join(" ")
            : "Write some words..."
            ;
    }

    const h1El = document.getElementById("result");
    reverse = function (_) { h1El.innerText = f(_); };

    const inputEl = document.getElementById("input");
    if (!!inputEl) { inputEl.focus(); }
});
