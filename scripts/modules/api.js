const baseUrl = "https://mijnhva.api.fdnd.nl/v1";

async function getAllPages() {
  return await fetchApi(`${baseUrl}/page`);
}

/**
 * Gets pages based of slug
 * @param {*} slug The page slug
 * @returns {Promise} response from the api endpoint
 */
async function getPage(slug) {
  return await fetchApi(`${baseUrl}/page/${slug}`);
}

async function getFaq() {
  return await fetchApi(`${baseUrl}/faq`);
}

async function getTip() {
  return await fetchApi(`${baseUrl}/tip`);
}

async function getSection() {
  return await fetchApi(`${baseUrl}/section`);
}

/**
 * Wraps the fetch api and returns the reponse body parse through json
 * @returns {Promise} the response of the api endpoint
 */
async function fetchApi(endpoint) {
  try {
    const res = await fetch(endpoint);
    const json = await res.json();
    return json;
  } catch (err) {
    console.log(err);
    return err;
  }
}

export { 
  getAllPages,
  getPage,
  getFaq,
  getTip,
  getSection
}
