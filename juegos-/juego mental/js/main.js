let tarjetaDestapada = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResult = null;
let ssegundoResult = null;
let movimientos = 0;
let temporizador = false;
let timer = 30;
let tiempoDetenido = null;
let aciertos = 0;

let mostrarMovimientos = document.getElementById('movimientos');
let mostrarAciertos = document.getElementById('aciertos');
let mostrarTiempo = document.getElementById('t-restante');


let numeros= [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numeros = numeros.sort(()=>{return Math.random()-0.5});

function contarTiempo(){
    tiempoDetenido = setInterval(()=>{
        timer --;
        mostrarTiempo.innerHTML = `Tiempo: ${timer} segundos`;
        if(timer == 0){
            clearInterval(tiempoDetenido);
            bloquearTarjeta();
        }
    },1000);
}

function bloquearTarjeta() {
    for (let i = 0; i <= 15; i++) {
        let tarjetaBloqueada = document.getElementById(`${i}`);
        tarjetaBloqueada.innerHTML = numeros[i];
        tarjetaBloqueada.disabled = true;
    }
}

const refreshButton = document.getElementById('refresh');
        refreshButton.addEventListener('click', function() {
        location.reload();
    });

    

function destapar(id){
    if(temporizador == false){
        contarTiempo();
        temporizador = true;
    }
    tarjetaDestapada ++;

    if(tarjetaDestapada ==1) {
        tarjeta1 = document.getElementById(id);
        primerResult = numeros[id];
        tarjeta1.innerHTML = primerResult;

        tarjeta1.disabled = true;
    }else if(tarjetaDestapada ==2) {
        tarjeta2 = document.getElementById(id);
        ssegundoResult = numeros[id];
        tarjeta2.innerHTML = ssegundoResult;

        tarjeta2.disabled = true;
        movimientos ++;
        mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`;

        if(primerResult == ssegundoResult){
            tarjetaDestapada = 0;
            aciertos ++;
            mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;

            if (aciertos == 8){
                mostrarAciertos.innerHTML = `Aciertos: ${aciertos} 😱`;
                mostrarTiempo.innerHTML = `Tiempo: ${timer} Segundos`;
                mostrarMovimientos.innerHTML = `Movimienttos: ${movimientos} 👍🏻`
                clearInterval(tiempoDetenido);
            }
        }else{
            setTimeout(()=>{
                tarjeta1.innerHTML = ` `;
                tarjeta2.innerHTML = ``;
                tarjeta1.disabled = false;
                tarjeta2.disabled = false;
                tarjetaDestapada = 0;
            }, 400);

        }
        
    }
}

