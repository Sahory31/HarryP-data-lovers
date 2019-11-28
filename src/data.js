export const app ={
   
  selectData: (data) => {
    const arrSelectData = [];
    for (let i= 0; i<data.length; i++){
        arrSelectData.push ({
        name: data[i].name,
        image: data[i].image,
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
      return finalArray;
  },
  reverseNames: (func) =>{
    return func.reverse();
  },

}
window.app = app;
export  function filterGirlsCategory(data){
  const arrFilterData = [];
  for (let i= 0; i<data.length; i++){
    if (data[i].gender == 'female'){
      arrFilterData.push({
        name: POTTER[i].name,
        image: POTTER[i].image
      });
    }
  }
  return arrFilterData;
}
export function filterMenCategory(data) {
  const arrFilterData = [];
  for (let i= 0; i<data.length; i++){
    if (data[i].gender == 'male'){
      arrFilterData.push({
        name: POTTER[i].name,
        image: POTTER[i].image
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
