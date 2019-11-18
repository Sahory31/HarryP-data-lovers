
/*
 * import POKEMON from './data/pokemon/pokemon.js'
 * import LoL from './data/lol/lol.js'
 * import POTTER from './data/potter/potter.js'
 */

/*import { POTTER } from './data.js';

console.log(POTTER); 
*/
/*
 * console.log(POKEMON);
 * console.log(LoL);
 * console.log(POTTER)
*/

 import {POTTER} from './data/potter/potter.js';
 console.log(POTTER); 

const harryData = app.selectData(POTTER);
console.log(harryData);
const characterContainer = document.getElementById('object');
characterContainer.innerHTML = harryData;
const createTemplateCard = list =>{
  let templateCard ='';
  list.forEach(hpData => {
    const card = `
    
    
    <p class = "hp-name">${hpData.name}</p>
       
    </div> `;
    templateCard += card;
    
  });
   characterContainer.innerHTML = templateCard;
};
createTemplateCard(harryData);
/*<div class="hp-card-info flex">
    <div class = "cards" id="${hpData.name}">
    <figure class = "hp-img" >
    <img class ="hp-image" src = "${hpData.img}"/>
    </figure> */

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