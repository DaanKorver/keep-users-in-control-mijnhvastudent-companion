const tabs = document.querySelectorAll(".tabs li");
const tabContent = document.querySelectorAll(".tab-panel");
let currentTab = tabContent[0];

function tabHandler() {
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
  }
  this.classList.add("active");
}

function tabContentHandler(i) {
  currentTab = tabContent[i];
  console.log(i);
  for (let j = 0; j < tabContent.length; j++) {
    if (tabContent != currentTab) {
      tabContent[j].classList.remove("active");
    }
  }
  currentTab.classList.add("active");
}

export {
  tabHandler,
  tabContentHandler
}