/*
 * import POKEMON from './data/pokemon/pokemon.js'
 * import LoL from './data/lol/lol.js'
 * import POTTER from './data/potter/potter.js'
 */

/*import { example } from './data.js';

console.log(example); */

/*
 * console.log(POKEMON);
 * console.log(LoL);
 * console.log(POTTER)
*/

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
