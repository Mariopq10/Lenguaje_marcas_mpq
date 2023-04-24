'use strict';
// pedimos el numero de cuadro donde escribir HOLA  

//do {
  //  var color = prompt("Dime el color (a,b,c)", "");
//} while (!color == "a" || !color == "b" || !color == "c");
var color;
function eligeColor() {
    color = prompt("Diga que color quiere rojo azul amarillo")
    switch (color) {
        case 'rojo':
            color = 'red';
            break;
        case 'azul':
            color = 'blue';
            break;
        case 'amarillo':
            color = 'yellow';
            break;
        default:
            color = 'black';
            break;
    }

}
function saludar(identificador){
    let id = "id"+ identificador;
    let cuadro = document.getElementById(id);
    cuadro.style.color=color;
    cuadro.innerHTML = "HOLA"
}
function cogerColor (identificador){
 let id = "id"+identificador;
 let cuadroColor = document.getElementById(id);


}

eligeColor();




//Elegimos el cuadro donde se colocará "HOLA"
