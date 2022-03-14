const baseUrl = "http://localhost:8000/v1";

async function getAllPages() {
  return await fetchApi(`${baseUrl}/page`);
}

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
