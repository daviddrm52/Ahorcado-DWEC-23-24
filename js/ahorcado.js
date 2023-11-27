//Variables para el temporizador

let elCrono;
let miFecha = new Date();
let tiempoTranscurrido = document.getElementById("tiempoTranscurrido");

//Inicializa el tiempo
miFecha.setHours(0,0,0,0);

//Inicializa el texto de "tiempoTranscurrido";
tiempoTranscurrido.innerHTML = "00:00:00";

//Funcion que realiza el cronometro de tiempo transcurrido
function cronometroInicial(){
    let horas = miFecha.getHours();
    let minutos = miFecha.getMinutes();
    let segundos = miFecha.getSeconds();
    segundos += 1;
    if (segundos == 60){
        segundos = 0;
        minutos += 1;
        miFecha.setMinutes(minutos);
    };
    if (minutos == 60){
        minutos = 0;
        horas += 1;
        miFecha.setHours(horas);
    };
    miFecha.setSeconds(segundos);
    if (horas < 10) { horas = "0" + horas;}
    if (minutos < 10) { minutos = "0" + minutos;}
    if (segundos < 10) { segundos = "0" + segundos;}
    tiempoTranscurrido.innerHTML = horas + ":" + minutos + ":" + segundos;   
};

//Variables para el ahorcado fase 1
let palabras = ["Air Chiquin", "Air Lian", "Air Nevada"];
let intentosRestantes = 7;
let intentosHTML = document.getElementById("intentos");
let botonPrueba = document.getElementById("temporal");
let divIniciarPartida = document.getElementById("iniciaPartida");
let botonIniciarPartida = document.getElementById("botonIniciarPartida");
let contenedor = document.getElementById("contenedor");
let contendorDerrota = document.getElementById("contenedor-derrota");
let contendorVictoria = document.getElementById("contenedor-victoria");
contenedor.style.display = "none";
botonPrueba.style.display = "none";

botonPrueba.addEventListener('click', (e) => {
    intentosRestantes--;
    console.log(intentosRestantes);
    intentosHTML.innerHTML = intentosRestantes;
    if(intentosRestantes === 0){
        clearInterval(cronometroInicial);
        botonPrueba.style.display = "none";
        contenedor.style.display = "none";
        contendorDerrota.style.display = "block";
        // contendorVictoria.style.display = "block";
    };
});

botonIniciarPartida.addEventListener('click', (e) => {
    elCrono = setInterval(cronometroInicial, 1000);
    botonIniciarPartida.style.display = "none";
    divIniciarPartida.style.display = "none";
    contenedor.style.display = "block";
    botonPrueba.style.display = "block";

});