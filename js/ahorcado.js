//Variables para el ahorcado fase 1
let palabras = [/*"AirChiquin", */"AIRLIAN"/*, "AirNevada", "ChiquitinAirlines"*/];
let intentosRestantes = 7;
let palabraSecreta = palabras[Math.floor(Math.random()*palabras.length)];
let intentosHTML = document.getElementById("intentos");
let solucionHTML = document.getElementById("solucion");
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
let palabraSeparadaOculta = palabraSecreta.toUpperCase().split("");
let palabraSeparadaCorrecta = palabraSecreta.split("");
for(let i = 0; i < palabraSeparadaOculta.length; i++){
    palabraSeparadaOculta.splice([i], 1, "_");
};
let amogus = palabraSeparadaOculta.join(',').replace(/,/g, ' ').split();
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

/* Eventos */
botonIniciarPartida.addEventListener('click', (e) => {
    elCrono = setInterval(cronometroInicial, 1000);
    botonIniciarPartida.style.display = "none";
    contenedorInicio.style.display = "none";
    contenedorAyuda.style.display = "none";
    contenedorReinicio.style.display = "block";
    contenedorTiempo.style.display = "block";
    contenedor.style.display = "block";

});

contenedor.addEventListener('click', (e) => {
    if(e.target.classList.contains('letra') && !e.target.classList.contains('error') && !e.target.classList.contains('correcto')){
        let letraEscogida = e.target.innerHTML;
        if(palabraSeparadaCorrecta.includes(letraEscogida) || palabraSeparadaCorrecta.includes(letraEscogida.toLowerCase())){
            e.target.classList.toggle('correcto');
            modificarPalabra(letraEscogida);            
        } else {
            e.target.classList.toggle('error');
            intentosRestantes--;
            intentosHTML.innerHTML = intentosRestantes;
        };
        if(intentosRestantes === 0){
            clearInterval(elCrono);
            contenedor.style.display = "none";
            contenedorDerrota.style.display = "block";
            solucionHTML.innerHTML = palabraSecreta;
        };

        console.log(palabraSeparadaCorrecta === palabraSeparadaOculta);

        if(palabraSeparadaCorrecta == palabraSeparadaOculta) {
            clearInterval(elCrono);
            contenedor.style.display = "none";
            contenedorVictoria.style.display = "block";
        }
    };
});

function modificarPalabra(userInput) {
    let primeraPosicionLetra = palabraSeparadaCorrecta.indexOf(userInput);
    console.log(palabraSeparadaOculta[primeraPosicionLetra] = userInput);
    let ultimaPosicionLetra = palabraSeparadaCorrecta.lastIndexOf(userInput);
    console.log(palabraSeparadaOculta[ultimaPosicionLetra] = userInput);
    let reemplazo = palabraSeparadaOculta.join(',').replace(/,/g, ' ').split();
    palabraSecretaHTML.innerText = reemplazo;

    console.log(palabraSeparadaCorrecta);
    console.log(palabraSeparadaOculta);
}