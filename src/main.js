
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

const page_all= document.getElementById('page_all');
const page = document.getElementById('page');
const categoryAll =document.getElementById('categoryAll');
const page_girls =document.getElementById('page_girls');
const page_men =document.getElementById('page_men');
const page_griffindor =document.getElementById('page_griffindor');
const page_Hufflepuff =document.getElementById('page_Hufflepuff');
const page_Ravenclaw =document.getElementById('page_Ravenclaw');
const page_slytherin =document.getElementById('page_slytherin');


page_all.addEventListener('click', event=> {
   page.classList.add('hide');
  categoryAll.classList.remove('hide');
  createTemplateCard(harryData);
  });

  page_girls.addEventListener('click', event=> {
    alert ("girls");
  
   });
  page_men.addEventListener('click', event=> {
    alert ("men");
  
   });
   page_griffindor.addEventListener('click', event=> {
    alert ("griffindor");
  
   });
   page_Hufflepuff.addEventListener('click', event=> {
    alert ("hufflepuff");
  
   });
   page_Ravenclaw.addEventListener('click', event=> {
    alert ("ravenclaw");
  
   });
   page_slytherin.addEventListener('click', event=> {
    alert ("slytherin");
  
   });

 import {POTTER} from './data/potter/potter.js';
 console.log(POTTER); 

const harryData = app.selectData(POTTER);
const characterContainer = document.getElementById('object');
characterContainer.innerHTML = harryData;
/*
const filterGirlsNames = app.filterGirlsCategory(POTTER);
console.log(filterGirlsNames);
let girlsContainer= document.getElementById('girls');
girlsContainer= filterGirlsNames;
/*
let menContainer= document.getElementById('men');
let griffindorContainer= document.getElementById('Griffindor');
let hufflepuffContainer= document.getElementById('Hufflepuff');
let slytherinContainer= document.getElementById('Slytherin');
let ravenclawContainer= document.getElementById('Ravenclaw');
*/

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
 // createTemplateCard(filterGirlsNames);
  characterContainer.innerHTML = templateCard;
   // girlsContainer.innerHTML = templateCard;
 // menContainer.innerHTML = templateCard;
 // griffindorContainer.innerHTML = templateCard;
 // hufflepuffContainer.innerHTML = templateCard;
 // slytherinContainer.innerHTML = templateCard;
 // ravenclawContainer.innerHTML = templateCard;
   
};






/*
const filterMenNames = app.filterMenCategory(POTTER);
console.log(filterMenNames);
createTemplateCard(filterMenNames);
menContainer= filterMenNames;

const filterGriffindor = app.gryffindorHouseCategory(POTTER);
console.log(filterGriffindor);
createTemplateCard(filterGriffindor);
griffindorContainer= filterGriffindor;

const filterhufflepuff = app.hufflepuffHouseCategory(POTTER);
console.log(filterhufflepuff);
createTemplateCard(filterhufflepuff);
hufflepuffContainer= filterhufflepuff;

const filterslytherin = app.slytherinHouseCategory(POTTER);
console.log(filterslytherin);
createTemplateCard(filterslytherin);
slytherinContainer= filterslytherin;

const filterRavenclaw = app.RavenclawHouseCategory(POTTER);
console.log(filterRavenclaw);
createTemplateCard(filterRavenclaw);
RavenclawContainer= filterRavenclaw;
*/

//------scrolling-------------------
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