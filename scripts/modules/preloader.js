const preloader = document.querySelector(".preloader");

function hidePreloader() {
  setTimeout(() => {
    preloader.classList.add("visible");
  }, 800);
}

export { hidePreloader };
