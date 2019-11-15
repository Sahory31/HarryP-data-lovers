/* Manejo de data */

// esta es una función de ejemplo

export const all = (POTTER) => {
  return all;
};

var timer = null;
var page = document.getElementById('page');
window.onscroll = function () {
  if (timer) {
    clearTimeout(timer);
    timer = null;
  }
  else {
    page.classList.toggle('scrolling');
  }
  timer = setTimeout(function () {
    page.classList.toggle('scrolling');
    timer = null;
  }, 150);
}
