

var jugadas = [];
alert('Mario Pérez Quintero 1ºDAW, Tres en raya.')
function elegir(id) {
    let cuadro = document.getElementById(id)
    cuadro.innerHTML = '0';
    jugadas.push(id);
    if (jugadas.length === 3 || jugadas.length > 3) {
        if (verificarJugadas()) {
            alert('¡Ganaste!');
            location.reload();
        } else {
            alert('Sigue intentando');
        }
    }
}

function hover(id) {
    let cuadro = document.getElementById(id);
    cuadro.style.backgroundColor = 'white';
}
function leave(id) {
    let cuadro = document.getElementById(id);
    cuadro.style.backgroundColor = 'gray';
}

function verificarJugadas() {
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
    

    for (var i = 0; i <combinacionesGanadoras.length; i++) {
        if (!combinacionesGanadoras[i].includes(jugadas[i]) ) {
          return false;
        }else {
            return true
        }
      }
    }


