/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronombre = ["the", "our", "their"];
  let adjetivo = ["great", "big", "awesome"]; //arrays
  let sustantivo = ["jogger", "racoon", "capybara"];

  for (let i = 0; i < pronombre.length; i++) {
    //for anidados
    for (let a = 0; a < adjetivo.length; a++) {
      for (let e = 0; e < sustantivo.length; e++) {
        console.log(`${pronombre[i]}${adjetivo[a]}${sustantivo[e]}.com`); //resultado de cada bucle for al final + concatenacion
      }
    }
  }
};
