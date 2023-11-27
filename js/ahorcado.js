// /* Variables */
// const contenedor = document.querySelector('.contenedor');
// const asientos = document.querySelectorAll('.fila .asiento:not(.ocupado)');
// const contador = document.getElementById('contador');
// const total = document.getElementById('total');
// const peliculaSelect = document.getElementById('pelicula');
// let precioTicket = +peliculaSelect.value;

// //Llamada a rellenaIU para rellenar la pagina con los datos guardados
// rellenaIU();

// /* Eventos */
// contenedor.addEventListener('click', (e) => {
//     if(e.target.classList.contains('asiento') && !e.target.classList.contains('ocupado')){
//         e.target.classList.toggle('seleccionado');
//         actualizaSeleccionAsientos();
//     };
// });

// peliculaSelect.addEventListener('change', (e) => {
//     precioTicket = +e.target.value;
//     localStorage.setItem('indexPeliculaSeleccionada', e.target.selectedIndex);
//     localStorage.setItem('precioPeliculaSeleccionada', e.target.value);
//     actualizaSeleccionAsientos();
// })

// /* Funciones */
// //Actualiza la selección de asientos cuando seleccionamos uno, ademas de calcular el precio de la pelicula en funcion de los asientos seleccionados
// function actualizaSeleccionAsientos(){
//     const asientosSeleccionados = document.querySelectorAll('.fila .asiento.seleccionado');
//     const asientosIndex = [...asientosSeleccionados].map((asiento) => [...asientos].indexOf(asiento));
//     localStorage.setItem('asientosSeleccionados', JSON.stringify(asientosIndex));
//     const contadorAsientosSeleccionados = asientosSeleccionados.length;
//     contador.innerText = contadorAsientosSeleccionados;
//     total.innerText = contadorAsientosSeleccionados * precioTicket;
// };

// //Llama al localStorage para recuperar la información guardada, y rellenar la pagina con los datos guardados
// function rellenaIU(){
//     const asientosSeleccionados = JSON.parse(localStorage.getItem('asientosSeleccionados'));
//     if(asientosSeleccionados !== null && asientosSeleccionados.length > 0){
//         asientos.forEach((asiento, index) => {
//             if(asientosSeleccionados.indexOf(index) > -1){
//                 asiento.classList.add('seleccionado');
//             };
//         });
//     };
//     const indexPeliculaSeleccionada = localStorage.getItem('indexPeliculaSeleccionada');
//     if(indexPeliculaSeleccionada !== null){
//         peliculaSelect.selectedIndex = indexPeliculaSeleccionada;
//     };
//     const precioPeliculaSeleccionada = localStorage.getItem('precioPeliculaSeleccionada');
//     if(precioPeliculaSeleccionada !== null){
//         precioTicket = +precioPeliculaSeleccionada;
//     };
// };

// //Llamada final a actualizaSeleccionAsientos, para que carguen los precios y los asientos en el ultimo parrafo
// actualizaSeleccionAsientos();