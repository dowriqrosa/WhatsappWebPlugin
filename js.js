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
    var segundoInicial
    document.querySelector("#side").style.width=innerWidth+'px';
    document.querySelector("#app").style.width=innerWidth+'px';
    var appClass = document.querySelector("#app").childNodes[0].className.split("app-wrapper-web font-fix");
    document.querySelector("#app").childNodes[0].className = appClass[0];
    document.querySelector("#app").childNodes[0].style.width=innerWidth+'px';

    telaTodasConversas();
    
    document.querySelector("#app").childNodes[0].childNodes[5].childNodes[2].childNodes[0].childNodes[3].childNodes[2].addEventListener("click", async function() {
        
        telaConversa();
    
        await sleep(1000);
        document.querySelector("#main").style.width=innerWidth+'px';
        document.querySelector("#app").childNodes[0].childNodes[5].childNodes[3].childNodes[0].childNodes[4].addEventListener("click",function(e) {
        
            if(segundoInicial+1000 > Date.now()){
                telaTodasConversas();
                segundoInicial = ""
            }else {
                segundoInicial = Date.now();
            }
        });
    });

    //Menu conversas arquivadas
    document.querySelector("#pane-side > button > div").addEventListener("click", async function() {
        await sleep(500);
        document.querySelector("#app > div > div").childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1].addEventListener("click", async function(e) {
            telaConversa();

            await sleep(500);
            document.querySelector("#main").style.width=innerWidth+'px';
            document.querySelector("#app").childNodes[0].childNodes[5].childNodes[3].childNodes[0].childNodes[4].addEventListener("click",function(e) {
            
                if(segundoInicial+1000 > Date.now()){
                    telaTodasConversas();
                    segundoInicial = ""
                }else {
                    segundoInicial = Date.now();
                }
            });
        })
    });

    /*Tela pesquisa conversas
    document.querySelector("#pane-side").addEventListener("click", async function() {
        
        telaConversa();
    
        await sleep(500);
        document.querySelector("#main").style.width=innerWidth+'px';
        document.querySelector("#app").childNodes[0].childNodes[5].childNodes[3].childNodes[0].childNodes[4].addEventListener("click",function(e) {
        
            if(segundoInicial+1000 < Date.now()){
                segundoInicial = Date.now();
            }else if( clickinicial-100 ){
                telaTodasConversas();
                clickinicial = ""
            }
        });
    });*/

}


function telaConversa() {
    document.querySelector("#app").childNodes[0].childNodes[5].childNodes[3].style.display = 'block';
    document.querySelector("#app").childNodes[0].childNodes[5].childNodes[2].style.display = 'none';
}

function telaTodasConversas() {
    document.querySelector("#app").childNodes[0].childNodes[5].childNodes[2].style.display = 'block';
    document.querySelector("#app").childNodes[0].childNodes[5].childNodes[3].style.display = 'none';
}
