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
const orderAZ= document.getElementById('orderAZ');

const arrTitle = ['Bienvenidos','Todos', 'Mujeres','Hombres','Griffindor','Hufflepuff', 'Slytherin', 'Ravenclaw'];
const title = document.getElementById("title");
title.innerHTML=`${arrTitle[0]}`;

page_all.addEventListener('click', event=> {
  
   page.classList.add('hide');
   categoryAll.classList.remove('hide');
   const element = createTemplateCard(harryData);
   title.innerHTML=`${arrTitle[1]}`;
   addEventClick(element);
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
    title.innerHTML=`${arrTitle[7]}`;
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
  orderAZ.addEventListener('click', event=> {
   
    createTemplateCard(orderNames);
   });
  

 import {POTTER} from './data/potter/potter.js';
 console.log(POTTER);
 

const characterContainer = document.getElementById('object');

const harryData = app.selectData(POTTER);
const orderNames= app.orderNames(POTTER);
 console.log(orderNames);
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

const createTemplateInfo = list =>{
  let templateCardInfo ='';
  for (let i=0; i <list.length; i++){
    let txtDiv = document.createElement('span');
    let imgDiv = document.createElement('img');
    txtDiv.innerHTML = `<p>${list[i].name}</p>`
    imgDiv.setAttribute('src',list[i].img);
  }
 console.log = templateCardInfo;
 modalContent.innerHTML = templateCardInfo;

};

const $modal = document.getElementById('modal');
const $overlay = document.getElementById('overlay');
const $hideModal= document.getElementById('hide-modal');
const modalContent =document.getElementById('modal-content');

const modalTitle = modal.querySelector('h1');
const modalImage = modal.querySelector('img');
const featuringContainer= document.getElementById('featuring');
const form= document.getElementById('form');

form.addEventListener('submit',(event)=>{
  event.preventDefault();
  featuringContainer.classList.add('search-active');
  page.classList.add('hide');
})

function addEventClick(modalCard){
  
  const cards = document.querySelectorAll('.cards');
  cards.forEach(element=>
    element.addEventListener('click', function(){
      //alert('hey');
      showModal()
      createTemplateInfo(harryData);
    }))
}

function showModal() {
  
  $overlay.classList.add('active');
  $modal.classList.add('modal');
  $hideModal.classList.remove('hide');
  
}

$hideModal.addEventListener('click', hideModal)
function hideModal() {
  overlay.classList.remove('active');
  $modal.classList.remove('modal');
  $hideModal.classList.add('hide');
}


/*

(async function load (){
  async function getData(url){
     const response = await fetch (url);
     const data= await response.json()
     return data;
   }
     const nameList = await getData('http://hp-api.herokuapp.com/api/characters')
     const griffindorList = await getData('http://hp-api.herokuapp.com/api/characters/house/Gryffindor')
     const ravenclawList = await getData('http://hp-api.herokuapp.com/api/characters/house/Ravenclaw')
     const HufflepuffList = await getData('http://hp-api.herokuapp.com/api/characters/house/Hufflepuff')
     const SlytherinList = await getData('http://hp-api.herokuapp.com/api/characters/house/Slytherin')
      //console.log(nameList);
     /*let SlytherinList;
     getData('http://hp-api.herokuapp.com/api/characters/house/Slytherin')
     .then(function (data){
       console.log(SlytherinList,data);
       SlytherinList=data;
     
     
    console.log(nameList, griffindorList, ravenclawList, HufflepuffList,SlytherinList);
      
    })()
 //})()

  
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