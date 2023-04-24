'use strict';
// pedimos el numero de cuadro donde escribir HOLA  

do{
var cuadro = prompt("Dime el cuadro donde quiere escribir (1-5)","");
}while(cuadro<0||cuadro>5);
do{
    var color = prompt("Dime el color (a,b,c)","");
    }while(!color=="a"||!color=="b"||!color=="c");




//Elegimos el cuadro donde se colocará "HOLA"
var selector = "id"+cuadro;
var piramide ="--o--<br/>-ooo-<br/>ooooo"
var selectorColor;
var estecuadro = document.getElementById(selector);
estecuadro.innerHTML=piramide;
if(color=="a"){
    estecuadro.style.color="red"
}else if(color=="b"){
    estecuadro.style.color="blue"
}else{
    estecuadro.style.color="green"
}


