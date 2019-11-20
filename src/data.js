/* Manejo de data */

// esta es una función de ejemplo

export const app ={
 
  selectData: (data) => {
    const arrSelectData = [];
    for (let i= 0; i<data.length; i++){
      console.log(data.length);
      arrSelectData.push ({
        name: data[i].name,
        img: data[i].image,
        house: data[i].house

      });
    }
    
    return arrSelectData;

  },

  filterGirlsCategory: (data) =>{
    const arrFilterData = [];
    for (let i= 0; i<data.length; i++){
      if (data[i].gender == 'female'){
        arrFilterData.push({
          name: POTTER[i].name,
          img: POTTER[i].image
        });
      }
      
    }
    return arrFilterData;
  },

  filterMenCategory: (data) =>{
    const arrFilterData = [];
    for (let i= 0; i<data.length; i++){
      if (data[i].gender == 'male'){
        arrFilterData.push({
          name: POTTER[i].name,
          img: POTTER[i].image
        });
      }
      
    }
    return arrFilterData;
  },
  
  gryffindorHouseCategory: (data) =>{
    const arrFilterData = [];
    for (let i= 0; i<data.length; i++){
      if (data[i].house == 'Gryffindor'){
        arrFilterData.push({
          name: POTTER[i].name,
          img: POTTER[i].image
        });
      }
      
    }
    return arrFilterData;
  },
  hufflepuffHouseCategory: (data) =>{
    const arrFilterData = [];
    for (let i= 0; i<data.length; i++){
      if (data[i].house == 'Hufflepuff'){
        arrFilterData.push({
          name: POTTER[i].name,
          img: POTTER[i].image
        });
      }
      
    }
    return arrFilterData;
  },
  slytherinHouseCategory: (data) =>{
    const arrFilterData = [];
    for (let i= 0; i<data.length; i++){
      if (data[i].house == 'Slytherin'){
        arrFilterData.push({
          name: POTTER[i].name,
          img: POTTER[i].image
        });
      }
      
    }
    return arrFilterData;
  },
  RavenclawHouseCategory: (data) =>{
    const arrFilterData = [];
    for (let i= 0; i<data.length; i++){
      if (data[i].house == 'Ravenclaw'){
        arrFilterData.push({
          name: POTTER[i].name,
          img: POTTER[i].image
        });
      }
     
    }  
    return arrFilterData;
  }
  
    
}
window.app = app;

var timer = null;

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
