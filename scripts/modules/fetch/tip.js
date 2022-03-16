import render from "../render.js";
import { getTip } from "../api.js";

const slider = document.querySelector(".instructions-slider")

async function fillTips() {
  return new Promise(async (resolve)=>{
    const tips = await getTip()
    tips.data.forEach(tip=>{
      const randomImg = Math.floor(Math.random() * 4) + 1
      const html = 
      `
        <article>

        <img src="assets/images/instructions/instruction${randomImg}.jpg" alt="Foto van aftekenlijst en laptop" /> 

        <div class="instruction-content">
        <h4>${tip.title}</h4>
        <hr />
        <p>${tip.body.substring(0,150)}...</p>
  
        <a href="#instructions">Meer lezen</a>
        </div>
      </article>
    `
    render(slider, html)
    })
    resolve()
  })
}

export default fillTips()