'use strict';
// pedimos el numero de cuadro donde escribir HOLA  

//do {
  //  var color = prompt("Dime el color (a,b,c)", "");
//} while (!color == "a" || !color == "b" || !color == "c");
var color;
function eligeColor(ident) {
    let id = "id"+ident;
    let cuadro = document.getElementById(id);
    cuadro.getComputedStyle(cuadro).background=color
    console.log(color);
 
    
    switch (id) {
        case 'id1':
            color = 'green';
            break;
        case 'id2':
            color = 'red';
            break;
        case 'id3':
            color = 'black';
            break;
            case 'id4':
            color = 'yellow';
            break;
            case 'id5':
            color = 'blue';
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
