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

  }
  
}
window.app = app;
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
