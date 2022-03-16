// 🚀 Imports
import toggleQuestion from "./modules/faq.js";
import {
  startDragging,
  stopDragging,
  dragHandler,
  instructionSlider,
} from "./modules/drag.js";
import { mobileMenu } from "./modules/navigation.js";
import { initTabs, fillTips } from "./modules/fetch/index.js"
import * as api  from "./modules/api.js";


// 🍉 Variables
const hamburger = document.querySelector(".hamburger");
const accordion = document.getElementsByClassName("faq-question");

// 📚 Story
hamburger.addEventListener("click", mobileMenu);
instructionSlider.addEventListener("mousemove", dragHandler, false);
instructionSlider.addEventListener("mousedown", startDragging, false);
instructionSlider.addEventListener("mouseup", stopDragging, false);
instructionSlider.addEventListener("mouseleave", stopDragging, false);

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", toggleQuestion);
}

Promise.all([initTabs, fillTips]).then(()=>{
  console.log('loaded');
})
