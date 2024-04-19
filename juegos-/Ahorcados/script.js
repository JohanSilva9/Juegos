// Lista de palabras predefinidas
const palabras = [
    'javascript',
    'html',
    'css',
    'python',
    'java',
    'php'
]; 

// Seleccionar una palabra al azar de la lista
let palabraSeleccionada = palabras[Math.floor(Math.random() * palabras.length)];

// Arreglo para almacenar las letras adivinadas
let letrasAdivinadas = [];

// Arreglo con las partes del ahorcado
let partesAhorcado = ['head', 'body', 'left-arm', 'right-arm', 'left-leg', 'right-leg'];

// Contador de intentos fallidos
let intentosFallidos = 0;

// Función para mostrar la palabra en la interfaz
function mostrarPalabra() {
    const contenedorPalabra = document.getElementById('word-container');
    contenedorPalabra.innerHTML = '';
    palabraSeleccionada.split('').forEach((letra, index) => {
        const span = document.createElement('span');
        span.textContent = letrasAdivinadas.includes(letra) ? letra : '_';
        contenedorPalabra.appendChild(span);
        if (index < palabraSeleccionada.length - 1) {
            const espacio = document.createElement('span');
            espacio.textContent = ' ';
            contenedorPalabra.appendChild(espacio);
        }
    });
}

// Función para mostrar los botones de las letras
function mostrarLetras() {
    const contenedorLetras = document.getElementById('letters-container');
    contenedorLetras.innerHTML = '';
    // Generar botones para cada letra del alfabeto
    for (let i = 65; i <= 90; i++) {
        const letra = String.fromCharCode(i).toLowerCase();
        const boton = document.createElement('button');
        boton.textContent = letra;
        boton.classList.add('letter');
        boton.addEventListener('click', () => {
            if (!letrasAdivinadas.includes(letra)) {
                letrasAdivinadas.push(letra);
                // Si la letra no está en la palabra seleccionada, incrementar el contador de intentos fallidos
                if (!palabraSeleccionada.includes(letra)) {
                    intentosFallidos++;
                    // Mostrar la parte correspondiente del ahorcado
                    document.getElementById(partesAhorcado[intentosFallidos - 1]).style.visibility = 'visible';
                    
                    if (intentosFallidos === 6) {
                        alert('Perdiste La palabra correcta era: ' + palabraSeleccionada);
                        reiniciarJuego();
                    }
                }
                mostrarPalabra();
                // Si todas las letras de la palabra han sido adivinadas, mostrar un mensaje de victoria
                if (!document.getElementById('word-container').textContent.includes('_')) {
                    alert('Felicitaciones, ganaste');
                    reiniciarJuego();
                }
            }
        });
        contenedorLetras.appendChild(boton);
    }
}

// Función para reiniciar el juego
function reiniciarJuego() {
    // Reiniciar variables
    palabraSeleccionada = palabras[Math.floor(Math.random() * palabras.length)];
    letrasAdivinadas = [];
    intentosFallidos = 0;
    // Ocultar todas las partes del ahorcado
    partesAhorcado.forEach(part => {
        document.getElementById(part).style.visibility = 'hidden';
    });
    // Volver a mostrar la palabra y las letras
    mostrarPalabra();
    mostrarLetras();
}

// Mostrar la palabra y las letras al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    mostrarPalabra();
    mostrarLetras();
});

// Asociar la función de reinicio al botón de reinicio
document.getElementById('reset-button').addEventListener('click', reiniciarJuego);


