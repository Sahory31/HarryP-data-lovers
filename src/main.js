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
const back = document.getElementById('back');

const arrTitle = ['Bienvenidos','Todos', 'Mujeres','Hombres','Griffindor','Hufflepuff', 'Slytherin', 'Ravenclaw'];
const title = document.getElementById("title");
title.innerHTML=`${arrTitle[0]}`;

page_all.addEventListener('click', event=> {
  
   page.classList.add('hide');
   categoryAll.classList.remove('hide');
   createTemplateCard(harryData);
   title.innerHTML=`${arrTitle[1]}`;
  });

page_girls.addEventListener('click', event=> {
    //alert ("girls");
    page.classList.add('hide');
    categoryAll.classList.remove('hide');
    createTemplateCard(filterGirlsNames);
    title.innerHTML=`${arrTitle[2]}`;
   });
  page_men.addEventListener('click', event=> {
   // alert ("men");
    page.classList.add('hide');
    categoryAll.classList.remove('hide');
    createTemplateCard(filterMenNames);
    title.innerHTML=`${arrTitle[3]}`;
    });
   page_griffindor.addEventListener('click', event=> {
   // alert ("griffindor");
    page.classList.add('hide');
    categoryAll.classList.remove('hide');
    createTemplateCard(filterGriffindor);
    title.innerHTML=`${arrTitle[4]}`;
   });
   page_Hufflepuff.addEventListener('click', event=> {
    //alert ("hufflepuff");
    page.classList.add('hide');
    categoryAll.classList.remove('hide');
    createTemplateCard(filterhufflepuff);
    title.innerHTML=`${arrTitle[5]}`;
   });
   page_Ravenclaw.addEventListener('click', event=> {
   // alert ("ravenclaw");
    page.classList.add('hide');
    categoryAll.classList.remove('hide');
    createTemplateCard(filterRavenclaw);
    title.innerHTML=`${arrTitle[5]}`;
   });
   page_slytherin.addEventListener('click', event=> {
    //alert ("slytherin");
    page.classList.add('hide');
    categoryAll.classList.remove('hide');
    createTemplateCard(filterslytherin);
    title.innerHTML=`${arrTitle[6]}`;
     });
     back.addEventListener('click', event=> {
      page.classList.remove('hide');
      categoryAll.classList.add('hide');
      title.innerHTML=`${arrTitle[0]}`;
      
       });

 import {POTTER} from './data/potter/potter.js';
 

const characterContainer = document.getElementById('object');

const harryData = app.selectData(POTTER);
const filterGirlsNames = app.filterGirlsCategory(POTTER);
const filterMenNames = app.filterMenCategory(POTTER);
const filterGriffindor = app.gryffindorHouseCategory(POTTER);
const filterhufflepuff = app.hufflepuffHouseCategory(POTTER);
const filterslytherin = app.slytherinHouseCategory(POTTER);
const filterRavenclaw = app.RavenclawHouseCategory(POTTER);



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