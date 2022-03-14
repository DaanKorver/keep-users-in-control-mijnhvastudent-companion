const instructionSlider = document.querySelector(".instructions-slider");

let mouseDown = false
let startX, scrollLeft

function startDragging(e) {
  mouseDown = true
  startX = e.pageX - instructionSlider.offsetLeft
  scrollLeft = instructionSlider.scrollLeft
}

function stopDragging() {
  mouseDown = false
}

function dragHandler(e) {
  e.preventDefault()
  if (!mouseDown) return
  const x = e.pageX - instructionSlider.offsetLeft
  const scroll = x - startX
  instructionSlider.scrollLeft = scrollLeft - scroll
}

export {
  startDragging,
  stopDragging,
  dragHandler,
  instructionSlider
}
