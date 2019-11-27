export const app ={
   
  selectData: (data) => {
    const arrSelectData = [];
    for (let i= 0; i<data.length; i++){
      console.log(data.length);
      arrSelectData.push ({
        name: data[i].name,
        img: data[i].image,
        house: data[i].house,
        actor: data[i].actor
      });
    }  
     return arrSelectData; 
  },
  orderNames:(func)=>{
    let finalArray = [];
    func.sort(function(a,b){
        if (a.name < b.name) {
        return -1;
        } else if (a.name > b.name) {
        return 1;
        }
        return 0; 
      }) 
      .forEach(function(element) {
        finalArray.push(element);
        
        return element;
        
      });
      console.log(finalArray);
      return finalArray;
  },
  ejecutar: (func) =>{
    return func.reverse();
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
/*
export  function filterGirlsCategory(data){
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
}

/*
const KEY = '&apikey=$2a$10$u7IQppiGj43L8rITRvO0LuTiYepa.utQKbYBfDQw1ejpJK57mS3rG';
const URL = `https://www.potterapi.com/v1/`;

(async function load(){
  const getData = async (url)=>{
    const response = await fetch(url)
    const data = await response.json();
    return data;
  }
  const nameList = await getData(`${URL}name.json${KEY}`);
  console.log(nameList);
  
})()

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
     
    /*let SlytherinList;
    getData('http://hp-api.herokuapp.com/api/characters/house/Slytherin')
    .then(function (data){
      console.log(SlytherinList,data);
      SlytherinList=data;
    })
    
})()
*/

