alert('Mario Pérez Quintero 1ºDAW, Tres en raya.')
const casillas = document.querySelectorAll('.casilla');
//Se crea la matriz con las combinaciones ganadoras que se recorrerá mas adelante.
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

let turno = "cruz";
let jugadas = [];

//Se recorre el array creado al principio, que es el tablero,
// y comprobamos si en la casilla en la que ha ocurrido el evento click
// se encuentra el turno en cuestion o no, y se modifica.
//Si al realizar la funcion comprobarGanador, compara las combinaciones ganadoras con el ARRAY casillas
//del turno en activo y encuentra un igual, salta el aviso de ganador del turno actual.
casillas.forEach(casilla => {
    casilla.addEventListener('click', () => {
        if (!jugadas.includes(parseInt(casilla.id))) {
            casilla.classList.add(turno);
            jugadas.push(parseInt(casilla.id));
            if (comprobarGanador(jugadas, combinacionesGanadoras, turno)) {
                alert(`El jugador ${turno} ha ganado!`);
                resetearTablero();
            } else if (jugadas.length === 9) {
                alert("¡Empate!");
                resetearTablero();
            } else {
                turno = turno === "cruz" ? "circulo" : "cruz";
            }
        }
    });
});
function comprobarGanador(jugadas, combinacionesGanadoras, turno) {
    for (let combinacion of combinacionesGanadoras) {
        if (combinacion.every(num => jugadas.includes(num) && casillas[num].classList.contains(turno))) {
            return true;
        }
    }
    return false;
}
//Funcion que resetea los valores del Array casillas, recorriendolo y eliminando los valores "cruz" y "circulo", al eliminar todo, turno pasa a ser "cruz" para iniciar una nueva partida.
function resetearTablero() {
    jugadas = [];
    casillas.forEach(casilla => {
        casilla.classList.remove("cruz", "circulo");
    });
    turno = "cruz";
}
