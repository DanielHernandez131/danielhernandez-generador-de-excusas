import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {

  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  // Función para elegir un elemento aleatorio
  function randomChoice(array) {
    const index = Math.floor(Math.random() * array.length);
    return array[index];
  }

  // Función para generar la excusa
  function generateExcuse() {
    return randomChoice(who) + " " + randomChoice(action) + " " + randomChoice(what) + " " + randomChoice(when) + ".";
  }

  // const excuseElement = document.getElementById("excuse").textContent = generateExcuse();

  const excuseElement = document.getElementById("excuse");
  
  if (excuseElement) {
    excuseElement.textContent = generateExcuse();
  }
};