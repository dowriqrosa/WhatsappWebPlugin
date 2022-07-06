"use strict";

var funcionou = false;
window.onload = function () {
    console.log("function called...");
    document.querySelector("body").addEventListener("click", iniciar);
}
function iniciar() {
    try {
      if(!funcionou){
        alterarDesign();
        funcionou = true;
      }
    } catch (error) {
      
    }
}


function alterarDesign() {

    function sleep(milliseconds) {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }
    var clickinicial = ""
    var segundoInicial

    document.querySelector("body").style.width=innerWidth+'px';
    document.querySelector("#side").style.width=innerWidth+'px';
    document.querySelector("#app").style.width=innerWidth+'px';
    document.querySelector("#app").childNodes[0].style.width=innerWidth+'px';

    document.querySelector("#app").childNodes[0].childNodes[5].childNodes[2].style.display = 'block';
    document.querySelector("#app").childNodes[0].childNodes[5].childNodes[3].style.display = 'none';
    
    document.querySelector("#app").childNodes[0].childNodes[5].childNodes[2].childNodes[0].childNodes[3].childNodes[2].addEventListener("click", async function() {
      document.querySelector("#app").childNodes[0].childNodes[5].childNodes[3].style.display = 'block';
      document.querySelector("#app").childNodes[0].childNodes[5].childNodes[2].style.display = 'none';
    
      await sleep(500);
      document.querySelector("#main").style.width=innerWidth+'px';
      document.querySelector("#app").childNodes[0].childNodes[5].childNodes[3].childNodes[0].childNodes[4].addEventListener("click",function(e) {
        
        if(clickinicial == "" || segundoInicial+1000 < Date.now()){
          clickinicial = e.clientX
          segundoInicial = Date.now();
          //&& segundoInicial+1000 > Date.now()
        }else if(e.clientX < clickinicial-100 ){
          document.querySelector("#app").childNodes[0].childNodes[5].childNodes[2].style.display = 'block';
          document.querySelector("#app").childNodes[0].childNodes[5].childNodes[3].style.display = 'none';
          clickinicial = ""
        }
      });
    });
}
