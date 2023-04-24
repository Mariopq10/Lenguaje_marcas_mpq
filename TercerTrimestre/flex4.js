'use strict';
// pedimos el numero de cuadro donde escribir HOLA  

var color;
var colorFn = ['greenyellow', 'pink', 'lightskyblue', 'grey', 'goldenrod'];

var colorFr = [
    'white', 'blue', 'black', 'yellow', 'red'
]
function pinturaInicial() {
    for (let i = 0; i < 5; i++) {
        let identificador='id'+(i+1);
        let elemento = document.getElementById(identificador)
        elemento.style.backgroundColor = colorFn[i];
        elemento.style.color = colorFr[i];
    }

}

function eligeColor(ident) {
    let id = "id"+ident;
    let cuadro = document.getElementById(id);
    cuadro.getComputedStyle(cuadro).backgroundColor;
    console.log(color);
}
function saludar(identificador) {
    let id = "id" + identificador;
    let cuadro = document.getElementById(id);
    cuadro.style.color = color;
    cuadro.innerHTML = "HOLA"
}
pinturaInicial();
