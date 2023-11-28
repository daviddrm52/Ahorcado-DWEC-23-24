//Variables para el ahorcado fase 1
let palabras = ["AirChiquin", "AirLian", "AirNevada", "ChiquitinAirlines"];
let intentosRestantes = 7;
let palabraSecreta = palabras[Math.floor(Math.random()*palabras.length)];
let intentosHTML = document.getElementById("intentos");
let botonPrueba = document.getElementById("temporal"); //eliminar cuando funcione
let botonIniciarPartida = document.getElementById("botonIniciarPartida");

//Variables de los contenedores (i know, it's a lot)
let contenedor = document.getElementById("contenedor");
let contenedorTiempo = document.getElementById("contenedor-tiempo");
let contenedorInicio = document.getElementById("contenedor-inicio");
let contenedorDerrota = document.getElementById("contenedor-derrota");
let contenedorVictoria = document.getElementById("contenedor-victoria");
let contenedorAyuda = document.getElementById("contenedor-ayuda");
let contenedorReinicio = document.getElementById("contenedor-reinicio");

//Variables en relación al contador
let elCrono;
let miFecha = new Date();
let tiempoTranscurrido = document.getElementById("tiempoTranscurrido");

// Ocultando la palabra 
let palabraSecretaHTML = document.getElementById("palabraSecreta");
let palabraSeparada = palabraSecreta.toUpperCase().split("");
let palabraSeparadaCorrecta = palabraSecreta.split("");
for(let i = 0; i < palabraSeparada.length; i++){
    palabraSeparada.splice([i], 1, "_");
};
let amogus = palabraSeparada.join(',').replace(/,/g, ' ').split();
palabraSecretaHTML.innerText = amogus;

//Variables para el cronometro
miFecha.setHours(0,0,0,0);
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

//Ocultar por defecto el contenedor
contenedor.style.display = "none";

botonPrueba.style.display = "none";

/* Eventos */
botonIniciarPartida.addEventListener('click', (e) => {
    elCrono = setInterval(cronometroInicial, 1000);
    botonIniciarPartida.style.display = "none";
    contenedorInicio.style.display = "none";
    contenedorAyuda.style.display = "none";
    contenedorReinicio.style.display = "block";
    contenedorTiempo.style.display = "block";
    contenedor.style.display = "block";
    botonPrueba.style.display = "inline-block";

});

botonPrueba.addEventListener('click', (e) => {
    intentosRestantes--;
    console.log(intentosRestantes);
    intentosHTML.innerHTML = intentosRestantes;
    if(intentosRestantes === 0){
        clearInterval(elCrono);
        botonPrueba.style.display = "none";
        contenedor.style.display = "none";
        contenedorDerrota.style.display = "block";
        // contendorVictoria.style.display = "block";
    };
});

contenedor.addEventListener('click', (e) => {
    if(e.target.classList.contains('letra') && !e.target.classList.contains('error') && !e.target.classList.contains('correcto')){
        e.target.classList.toggle('correcto');
        let letraEscogida = e.target.innerHTML;
        verificaLetra(letraEscogida);
    };
});

function verificaLetra(userInput){
    // console.log(palabraSeparadaCorrecta);
    // console.log(palabraSeparada);
    console.log("Letra seleccionada: " + userInput);
    
};