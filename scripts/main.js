// Header active nav item
const header = document.querySelector("header");
const headerBtns = header.getElementsByClassName("nav-link");

for (var i = 0; i < headerBtns.length; i++) {
  headerBtns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// Mobile navigation

// Define mobile menu elements
const Hamburger = document.querySelector(".hamburger");
const MobileMenu = document.querySelector(".mobile-nav");

Hamburger.addEventListener("click", function() {
    MobileMenu.classList.toggle("open");
})

// Information tabs

// Define info links
const tabLinkMijnHvA = document.querySelector("#mijnhva-link");
const tabLinkPlatform = document.querySelector("#platform-link");
const tabLinkProductTeam = document.querySelector("#productteam-link");
const tabLinkOnderwijs = document.querySelector("#onderwijs-link");

// Define info tabs
const infoTabMijnHvA = document.querySelector("#tab-mijnhva");
const infoTabPlatform = document.querySelector("#tab-platform");
const infoTabProductTeam = document.querySelector("#tab-productteam");
const infoTabOnderwijs = document.querySelector("#tab-onderwijs");

// MijnHvA tab toggle
tabLinkMijnHvA.addEventListener("click", function() {

  // Hide / show the tabs
  infoTabMijnHvA.classList.add("active");
  infoTabPlatform.classList.remove("active");
  infoTabProductTeam.classList.remove("active");
  infoTabOnderwijs.classList.remove("active");

  // Active class on tab links
  tabLinkMijnHvA.classList.add("active");
  tabLinkPlatform.classList.remove("active");
  tabLinkProductTeam.classList.remove("active");
  tabLinkOnderwijs.classList.remove("active");
});

// Platform tab toggle
tabLinkPlatform.addEventListener("click", function() {

  // Hide / show the tabs
  infoTabMijnHvA.classList.remove("active");
  infoTabProductTeam.classList.remove("active");
  infoTabPlatform.classList.add("active");
  infoTabOnderwijs.classList.remove("active");

  // Active class on tab links
  tabLinkMijnHvA.classList.remove("active");
  tabLinkProductTeam.classList.remove("active");
  tabLinkPlatform.classList.add("active");
  tabLinkOnderwijs.classList.remove("active");
});

// Productteam tab toggle
tabLinkProductTeam.addEventListener("click", function() {
  
  // Hide / show the tabs
  infoTabMijnHvA.classList.remove("active");
  infoTabPlatform.classList.remove("active");
  infoTabProductTeam.classList.add("active");
  infoTabOnderwijs.classList.remove("active");

  // Active class on tab links
  tabLinkMijnHvA.classList.remove("active");
  tabLinkPlatform.classList.remove("active");
  tabLinkOnderwijs.classList.remove("active");
  tabLinkProductTeam.classList.add("active");
})

// Onderwijs tab toggle
tabLinkOnderwijs.addEventListener("click", function() {

  // Hide / show the tabs
  infoTabMijnHvA.classList.remove("active");
  infoTabPlatform.classList.remove("active");
  infoTabProductTeam.classList.remove("active");
  infoTabOnderwijs.classList.add("active");

  // Active class on tab links
  tabLinkOnderwijs.classList.add("active");
  tabLinkMijnHvA.classList.remove("active");
  tabLinkPlatform.classList.remove("active");
  tabLinkProductTeam.classList.remove("active");
})

// Instruction slider grab
const instructionSlider = document.querySelector(".instructions-slider");
let mouseDown = false;
let startX, scrollLeft;

let startDragging = function (e) {
  mouseDown = true;
  startX = e.pageX - instructionSlider.offsetLeft;
  scrollLeft = instructionSlider.scrollLeft;
};
let stopDragging = function (event) {
  mouseDown = false;
};

instructionSlider.addEventListener("mousemove", (e) => {
  e.preventDefault();
  if (!mouseDown) {
    return;
  }
  const x = e.pageX - instructionSlider.offsetLeft;
  const scroll = x - startX;
  instructionSlider.scrollLeft = scrollLeft - scroll;
});

// Add the event listeners
instructionSlider.addEventListener("mousedown", startDragging, false);
instructionSlider.addEventListener("mouseup", stopDragging, false);
instructionSlider.addEventListener("mouseleave", stopDragging, false);

// FAQ Accordion
const accordion = document.getElementsByClassName("faq-question");
var i;

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}