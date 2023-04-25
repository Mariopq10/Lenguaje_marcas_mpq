
const CELDAS = Array.from(document.querySelectorAll('.celda'));

let jugadas = [];
function elegir(id) {
    let cuadro = document.getElementById(id)
    cuadro.innerHTML = '0';
    jugadas.push(id);
    if (jugadas.length === 3) {
        if (verificarJugadas()) {
            alert('¡Ganaste!');
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
        ['0', '1', '2'],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];


    for (let i = 0; i < jugadas.length; i++) {
        if (!combinacionesGanadoras.includes(jugadas[i])) {
            return false;
        }
    }

    return true; 
}

