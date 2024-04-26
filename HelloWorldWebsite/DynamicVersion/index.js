"use strict";

window.onload = init;

function init(){
    const helloBtnElement = document.getElementById("helloBtn");
    helloBtnElement.onclick = onHelloClicked;
    console.log("index.js init() executed");
}


function onHelloClicked() {
    alert("Hi there!");
}