const X_CLASE = 'X';
const O_CLASE = 'O';
let jugadorActual = X_CLASE;
let tableroJuego = ['', '', '', '', '', '', '', '', ''];
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

const casillas = document.querySelectorAll('.casilla');
const estadoJuego = document.getElementById('estado');

// Función para manejar un movimiento
function manejarMovimiento(indice) {
    if (tableroJuego[indice] === '') {
        tableroJuego[indice] = jugadorActual;
        casillas[indice].innerText = jugadorActual;
        if (comprobarGanador(jugadorActual)) {
            estadoJuego.innerText = jugadorActual + " Es el ganador ";
            desactivarTablero();
        } else if (esEmpate()) {
            estadoJuego.innerText = 'Es un empate';
        } else {
            jugadorActual = jugadorActual === X_CLASE ? O_CLASE : X_CLASE;
            estadoJuego.innerText = "Turno de " + jugadorActual;
        }
    }
}

// Función para comprobar si hay un ganador
function comprobarGanador(jugador) {
    return combinacionesGanadoras.some(comb => {
        return comb.every(indice => {
            return tableroJuego[indice] === jugador;
        });
    });
}

// Función para comprobar si es un empate
function esEmpate() {
    return tableroJuego.every(casilla => {
        return casilla !== '';
    });
}

// Función para desactivar el tablero después de que alguien gane
function desactivarTablero() {
    casillas.forEach(casilla => {
        casilla.style.pointerEvents = 'none';
    });
}

// Función para reiniciar el juego
function reiniciarJuego() {
    tableroJuego = ['', '', '', '', '', '', '', '', ''];
    casillas.forEach(casilla => {
        casilla.innerText = '';
        casilla.style.pointerEvents = 'auto';
    });
    jugadorActual = X_CLASE;
    estadoJuego.innerText = "Turno de" + jugadorActual ;
}
