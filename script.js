"use strict";
//Vars
let counter = 0;

document.querySelector(".increase").addEventListener("click", function () {
  counter++;
  document.querySelector(".counter").textContent = counter;
});
document.querySelector(".decrease").addEventListener("click", function () {
  counter--;
  document.querySelector(".counter").textContent = counter;
});
document.querySelector(".reset").addEventListener("click", function () {
  counter = 0;
  document.querySelector(".counter").textContent = counter;
});
