const casillas = document.querySelectorAll('.casilla');
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

casillas.forEach(casilla => {
  casilla.addEventListener('click', () => {
    if (!jugadas.includes(parseInt(casilla.id))) {
      casilla.classList.add(turno);
      jugadas.push(parseInt(casilla.id));
      if (comprobarGanador(jugadas, combinacionesGanadoras)) {
        alert(`¡${turno} ha ganado!`);
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

function comprobarGanador(jugadas, combinacionesGanadoras) {
  for (let combinacion of combinacionesGanadoras) {
    if (combinacion.every(num => jugadas.includes(num))) {
      return true;
    }
  }
  return false;
}

function resetearTablero() {
  jugadas = [];
  casillas.forEach(casilla => {
    casilla.classList.remove("cruz", "circulo");
  });
  turno = "cruz";
}
