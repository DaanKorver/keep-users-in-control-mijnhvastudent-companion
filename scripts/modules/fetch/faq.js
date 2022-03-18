import render from "../render.js";
import { getFaq } from "../api.js";

const faqContainer = document.querySelector(".faq-section");

const groupBy = (items, key) =>
  items.reduce(
    (result, item) => ({
      ...result,
      [item[key]]: [...(result[item[key]] || []), item],
    }),
    {}
  );

async function initFaq() {
  return new Promise(async (resolve) => {
    const faqContent = await getFaq();
    const categories = Object.entries(
      groupBy(faqContent.data, "faq_category_id")
    );

    categories.forEach((cat) => {
      const title = cat[1][0].title;
      const questions = cat[1];
      let html = ''
      questions.forEach(question=>{
        html += `
          <details>
            <summary class="faq-question">${question.question}
              <figure class="summary-chevron">
                <img src="../assets/images/chevron-right.svg"></img>
              </figure>
            </summary>
            <p> ${question.answer} </p>
          </details>
        `;
      });
      const faqCategory = `
        <div class="faq-questions">
          <h3>${title}</h3>
          <hr>
          ${html}
       </div>
      `;
      render(faqContainer, faqCategory);
    });
    resolve();
  });
}
export default initFaq();
