// 🚀 Imports
import toggleQuestion from "./modules/fetch/faq.js";
import {
  startDragging,
  stopDragging,
  dragHandler,
  instructionSlider,
} from "./modules/drag.js";
import { mobileMenu } from "./modules/navigation.js";
import * as fetches from "./modules/fetch/index.js";
import { hidePreloader } from "./modules/preloader.js"

// 🍉 Variables
const hamburger = document.querySelector(".hamburger");
const accordion = document.getElementsByClassName("faq-question");
const error = document.querySelector(".error");

// 📚 Story
hamburger.addEventListener("click", mobileMenu);
instructionSlider.addEventListener("mousemove", dragHandler, false);
instructionSlider.addEventListener("mousedown", startDragging, false);
instructionSlider.addEventListener("mouseup", stopDragging, false);
instructionSlider.addEventListener("mouseleave", stopDragging, false);

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", toggleQuestion);
}

Promise.all(Object.values(fetches)).then(() => {
  console.log("%cMijnHvA: " + "%cLoaded all sections", 'font-size: 1.5rem; color: #25167a; background: white;', 'font-size: 1.5rem; color: lime; background: white;');
  hidePreloader()
}).catch(err=>{
  error.classList.add('visible')
})
