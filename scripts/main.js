// 🚀 Imports
import toggleQuestion from "./modules/faq.js";
import { startDragging, stopDragging, dragHandler, instructionSlider } from "./modules/drag.js";
import { mobileMenu } from "./modules/navigation.js";

// Variables
const tabLinkMijnHvA = document.querySelector("#mijnhva-link");
const tabLinkPlatform = document.querySelector("#platform-link");
const tabLinkProductTeam = document.querySelector("#productteam-link");
const tabLinkOnderwijs = document.querySelector("#onderwijs-link");

// Define info tabs
const infoTabMijnHvA = document.querySelector("#tab-mijnhva");
const infoTabPlatform = document.querySelector("#tab-platform");
const infoTabProductTeam = document.querySelector("#tab-productteam");
const infoTabOnderwijs = document.querySelector("#tab-onderwijs");

const hamburger = document.querySelector(".hamburger");

// Toggle mobileMenu
hamburger.addEventListener("click", mobileMenu);

// Instruction slider grab
instructionSlider.addEventListener("mousemove", dragHandler, false);
instructionSlider.addEventListener("mousedown", startDragging, false);
instructionSlider.addEventListener("mouseup", stopDragging, false);
instructionSlider.addEventListener("mouseleave", stopDragging, false);

// FAQ Accordion
const accordion = document.getElementsByClassName("faq-question");

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", toggleQuestion);
}

const tabs = document.querySelectorAll(".tabs li a")
const tabContent = document.querySelectorAll(".tab-panel")
let currentTab = tabContent[0]

tabs.forEach(tab=>{
  tab.addEventListener("click", function() {
    for (let i = 0; i < tabs.length; i++) {
       tabs[i].classList.remove("active") }
 
    this.classList.add("active") })
})

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function() {
    currentTab = tabContent[i]
    for (let j = 0; j < tabContent.length; j++) {
      if(tabContent != currentTab) {
        tabContent[j].classList.remove("active")
      }
    }
    currentTab.classList.add("active")
  })
}
