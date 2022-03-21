const id = new URLSearchParams(window.location.search).get('id')
const tipTitle = document.querySelector('.tip-title')
const tipBody = document.querySelector('.tip-body')

if(!id) window.location.href = 'index.html'

render()

async function fetchTip(id) {
  const response = await fetch('https://mijnhva.api.fdnd.nl/v1/tip')
  const json = await response.json()
  const tip = json.data.find(tip => tip.tip_id == id)
  if(!tip) window.location.href = 'index.html'
  return tip
}

async function render() {
  const tip = await fetchTip(id)
  tipTitle.innerText = tip.title
  tipBody.innerText = tip.body
}