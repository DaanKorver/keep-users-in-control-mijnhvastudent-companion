// 🚀 Imports
import toggleQuestion from "./modules/faq.js";
import {
  startDragging,
  stopDragging,
  dragHandler,
  instructionSlider,
} from "./modules/drag.js";
import { mobileMenu } from "./modules/navigation.js";
import { tabHandler, tabContentHandler } from "./modules/tabs.js";
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

const tabs = document.querySelectorAll(".tabs li");

tabs.forEach((tab) => {
  tab.addEventListener("click", tabHandler);
});

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", () => tabContentHandler(i));
}
