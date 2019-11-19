
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

const pageAll= document.getElementById('pageAll');
const page = document.getElementById('page');
const categoryAll =document.getElementById('categoryAll');

pageAll.addEventListener('click', event=> {
  alert('hey');
  page.classList.add('hide');
  categoryAll.classList.remove('hide');
   
    
  });

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
    
    <div class = "cards" id="${hpData.name}">
    
    <img class ="hp-image" src = "${hpData.img}"/>
    
    <p class = "hp-name">${hpData.name}</p>
       
    </div> `;
    templateCard += card;
    
  });
   characterContainer.innerHTML = templateCard;
};
createTemplateCard(harryData);


let timer = null;

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