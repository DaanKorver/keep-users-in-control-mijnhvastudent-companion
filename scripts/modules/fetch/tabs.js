import render from "../render.js"
import { getPage } from "../api.js"

const tabs = document.querySelector(".tabs")
const tabContentContainer = document.querySelector(".tab-content")

async function initTabs() {
  return new Promise(async (resolve)=>{
    const tabContentData = await getPage('over')
    for (let i = 0; i < tabContentData.data.length; i++) {
      const item = tabContentData.data[i]
      const tabHtml = 
      `
        <li class="${i === 0 ? "active" : ""}"><h3>${item.title}</h3></li>
      `

      const tabContentHtml =
      `
        <article class="tab-panel ${i === 0 ? "active" : ""}">
          <h3>${item.title}</h3>
          <span class="seperator"></span>
          <p>${item.body}</p>
        </article>
      `
      
      render(tabs, tabHtml)
      render(tabContentContainer, tabContentHtml)
    }
    const tabItems = document.querySelectorAll(".tabs li");
    const tabContent = document.querySelectorAll(".tab-panel");
    let currentTab = tabContent[0];

    tabItems.forEach((tab) => {
      tab.addEventListener("click", function() {
        for (let i = 0; i < tabItems.length; i++) {
          tabItems[i].classList.remove("active");
        }
        this.classList.add("active");
      });
    });
    
    for (let i = 0; i < tabItems.length; i++) {
      tabItems[i].addEventListener("click", function() {
        currentTab = tabContent[i];
        for (let j = 0; j < tabContent.length; j++) {
          if (tabContent != currentTab) {
            tabContent[j].classList.remove("active");
          }
        }
        currentTab.classList.add("active");
      });
    }
    resolve()
  })
}

export default initTabs()