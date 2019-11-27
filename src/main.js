import {POTTER} from './data/potter/potter.js';
import {filterGirlsCategory} from './data.js';
import {filterMenCategory} from './data.js';
(async function load (){
  async function getData(url){
     const response = await fetch (url);
     const data= await response.json()
     return data;
   }
const harryData= await getData('http://hp-api.herokuapp.com/api/characters')
const filterGriffindor = await getData('http://hp-api.herokuapp.com/api/characters/house/Gryffindor')
const filterRavenclaw = await getData('http://hp-api.herokuapp.com/api/characters/house/Ravenclaw')
const filterhufflepuff = await getData('http://hp-api.herokuapp.com/api/characters/house/Hufflepuff')
const filterslytherin = await getData('http://hp-api.herokuapp.com/api/characters/house/Slytherin')
const filterGirlsNames = filterGirlsCategory(POTTER);
const filterMenNames = filterMenCategory(POTTER);
//const harryData = app.selectData(POTTER);
//const orderNames= app.orderNames(POTTER);
//const filterGirlsNames = app.filterGirlsCategory(POTTER);
//const filterMenNames = app.filterMenCategory(POTTER);
//const filterGriffindor = app.gryffindorHouseCategory(POTTER);
//const filterhufflepuff = app.hufflepuffHouseCategory(POTTER);
//const filterslytherin = app.slytherinHouseCategory(POTTER);
//const filterRavenclaw = app.RavenclawHouseCategory(POTTER);
const orderNames= app.orderNames(app.selectData(POTTER));
const  reverseZA = app.reverseNames(app.orderNames(app.selectData(POTTER)));

const characterContainer = document.getElementById('object');
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
const orderZA= document.getElementById('orderZA');
const arrTitle = ['Bienvenidos','Todos Los Personajes', 'Personajes Femeninos','Personajes Masculinos','Casa Griffindor','Casa Hufflepuff', 'Casa Slytherin', 'Casa Ravenclaw'];
const title = document.getElementById("title");
title.innerHTML=`${arrTitle[0]}`;
  
const $modal = document.getElementById('modal');
const $overlay = document.getElementById('overlay');
const hide_modal_btn= document.getElementById('hide-modal');
const modalContent =document.getElementById('modal-content');

const featuringContainer= document.getElementById('featuring');
const featuringBtn = document.getElementById('back_featuring');
const $form= document.getElementById('form');
//-------------Botones del menú categorias---------
page_all.addEventListener('click', event=> {
   page.classList.add('hide');
   categoryAll.classList.remove('hide');
   const element = createTemplateCard(harryData);
   title.innerHTML=`${arrTitle[1]}`;
   addEventClick(element);
  });
page_girls.addEventListener('click', event=> {
    page.classList.add('hide');
    categoryAll.classList.remove('hide');
    const element =createTemplateCard(filterGirlsNames);
    title.innerHTML=`${arrTitle[2]}`;
    addEventClick(element);
   });
  page_men.addEventListener('click', event=> {
    page.classList.add('hide');
    categoryAll.classList.remove('hide');
    const element = createTemplateCard(filterMenNames);
    title.innerHTML=`${arrTitle[3]}`;
    addEventClick(element);
    });
   page_griffindor.addEventListener('click', event=> {
    page.classList.add('hide');
    categoryAll.classList.remove('hide');
    const element = createTemplateCard(filterGriffindor);
    title.innerHTML=`${arrTitle[4]}`;
    addEventClick(element);
   });
   page_Hufflepuff.addEventListener('click', event=> {
    page.classList.add('hide');
    categoryAll.classList.remove('hide');
    const element = createTemplateCard(filterhufflepuff);
    title.innerHTML=`${arrTitle[5]}`;
    addEventClick(element);
   });
   page_Ravenclaw.addEventListener('click', event=> {
    page.classList.add('hide');
    categoryAll.classList.remove('hide');
    const element = createTemplateCard(filterRavenclaw);
    title.innerHTML=`${arrTitle[7]}`;
    addEventClick(element);
   });
   page_slytherin.addEventListener('click', event=> {
    page.classList.add('hide');
    categoryAll.classList.remove('hide');
    const element = createTemplateCard(filterslytherin);
    title.innerHTML=`${arrTitle[6]}`;
    addEventClick(element);
     });
     back.addEventListener('click', event=> {
      page.classList.remove('hide');
      categoryAll.classList.add('hide');
      title.innerHTML=`${arrTitle[0]}`;
    });
//--------Botones ordenar alfabeticamen--------------
  orderAZ.addEventListener('click', event=> {
    const element = createTemplateCard(orderNames);
    addEventClick(element);
   });
   orderZA.addEventListener('click', event=> {
    const element = createTemplateCard(reverseZA);
    addEventClick(element);
   });
//------Funcion templates de categorias-------
const createTemplateCard = list =>{
  let templateCard ='';
  list.forEach(hpData => {
    const card = `
    <div class = "cards" id="${hpData.name}">
    <img class ="hp-image" src = "${hpData.image}"/>
    <p class = "hp-name">${hpData.name}</p>
    </div> `;
    templateCard += card;
  });
  characterContainer.innerHTML = templateCard;
  };
//--------Buscardor por nombre---------------
$form.addEventListener('submit',(event)=>{
  event.preventDefault();
  const section_featuring = document.getElementById('section_featuring');
  featuringContainer.classList.add('search-active');
  page.classList.add('hide');
  section_featuring.classList.remove('hide');

  let nameValue = document.getElementById('characterSearch').value;
  
   function searchByName (searching){
      return  searching.name == nameValue
    }
     let characterSearching = harryData.find(searchByName);
      if (characterSearching ===undefined){
  //featuringContainer.innerHTML = JSON.stringify(characterSearching);  
    featuringContainer.innerHTML= `<p class = "hp-name">No ha encontrado el personaje </p> `;
     } else if (characterSearching.name == nameValue){
    const charInfo= `
    <div class="cards card_center">
    <img class ="hp-image" src = "${characterSearching.image}"/>
    <p class = "hp-name">${characterSearching.name}</p>
    <p class = "hp-name">${characterSearching.house}</p>
    <p class = "hp-name">${characterSearching.actor}</p>
    </div> `;
    featuringContainer.innerHTML= charInfo;
     }
})
//---- evento regresar al menu princial----------

featuringBtn.addEventListener('click',event=> {
  page.classList.remove('hide');
  section_featuring.classList.add('hide');
})
//-----Mostar info en tarjetas-----------------
function addEventClick(){
  const cards = document.querySelectorAll('.cards');
  cards.forEach(element=>
    element.addEventListener('click', function(){
      const characterId= event.currentTarget.id;
      console.log(characterId);
      const infoHp = harryData.filter(infoEachOne=> infoEachOne.name=== characterId
        );
        infoHp.forEach(function(hpData){
          const cardInfo= `
          <img class ="hp-image" src = "${hpData.image}"/>
          <p class = "info">${hpData.name}</p>
          <p class = "info">${hpData.house}</p>
          <p class = "info">${hpData.actor}</p>
          `;
          modal.innerHTML= cardInfo;
        });
      showModal()  
    }))
}
//----Mostar y ocultar modal----------------
function showModal() {
 
  $overlay.classList.add('active');
  $modal.classList.add('modal');
  title.classList.add('overlay');  
  $modal.classList.remove('hide');
  modalContent.classList.remove('hide');
}
hide_modal_btn.addEventListener('click', hideModal)
function hideModal(){
        $modal.classList.add('hide');
        $overlay.classList.remove('active');
        title.classList.remove('overlay');
        modalContent.classList.add('hide');
       }
  
})()

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
//-----------------------------------------------
