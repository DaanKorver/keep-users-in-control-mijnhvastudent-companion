import render from "../render.js";
import { getFaq } from "../api.js";

const faqContainer = document.querySelector(".faq-questions");

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
      const questionHtml = questions.reduce((prev, curr) => {
        const questionHtml =
          prev +
          `
             <details>
        <summary class="faq-question">${curr.question}
          <figure class="summary-chevron">
            <img src="../assets/images/chevron-right.svg"></img>
          </figure>
        </summary>
        <p> ${curr.answer} </p>
      </details>
        `;
        return questionHtml;
      });
      console.log(questionHtml);
    });
    resolve();
  });
}
export default initFaq();
