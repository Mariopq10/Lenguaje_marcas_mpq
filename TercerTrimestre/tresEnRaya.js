
const CELDAS = Array.from(document.querySelectorAll('.celda'));


function elegir(id){
let cuadro = document.getElementById(id)
cuadro.innerHTML='0';
}
function hover(id){
    let cuadro= document.getElementById(id);
    cuadro.style.backgroundColor='white';
}
function leave(id){
    let cuadro= document.getElementById(id);
    cuadro.style.backgroundColor='gray';
}



function verificarGanador() {
  const combinacionesGanadoras = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
}

