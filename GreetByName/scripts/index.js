"use strict";

window.onload = init;

function init(){
    const helloBtnElement = document.getElementById("helloBtn");
    helloBtnElement.onclick = onGreetuserBtnClicked;
    console.log("index.js init() executed");
}


function onGreetUserBtnClcicked() {
    alert("Hello User Name Here");
}