"use strict";

window.onload = init;

function init() {
  const greetBtn = document.getElementById("greetBtn");
  greetBtn.onclick = onGreetUserBtnClicked;
}

function onGreetUserBtnClicked() {
  // find the name text field using getElementById
  const nameField = document.getElementById("nameField");

  // extract the name from the text field
  let name = nameField.value;

  // use the name to create a string the ctontains "Hello usernamehere"
  let message = "Hello " + name + "!";
  console.log(message);

  //display the message using alert

  alert(message);
}
