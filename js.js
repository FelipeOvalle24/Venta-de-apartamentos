const info = document.getElementById("container-info");
const torre = document.getElementById("torre");
const containerImg = document.getElementById("container-img")
const botonContinuar = document.getElementById("boton-continuar")
const seccionPrincipal = document.getElementById("container-principal")
const seccionApartamentos = document.getElementById("container-apartamentos")
const seccionApartamentoUno = document.getElementById("apartamento-uno")
const botonApartamentoUno = document.getElementById("boton-uno")
const seccionApartamentoDos = document.getElementById("apartamento-dos")
const botonApartamentoDos = document.getElementById("boton-dos")
const botonReset = document.getElementById("boton-reset")
const header = document.getElementById("header")
const seccionPresentacion = document.getElementById("container-presentacion")
const botonComenzar = document.getElementById("boton-comenzar")

seccionApartamentos.style.display = "none"
seccionApartamentoUno.style.display = "none"
seccionApartamentoDos.style.display = "none"
seccionPrincipal.style.display = "none"
header.style.display = "none"

torre.addEventListener("click", mostrarTexto);
botonContinuar.addEventListener("click", ocultarTodo)
botonApartamentoUno.addEventListener("click", mostrarApartamentoUno)
botonApartamentoDos.addEventListener("click", mostrarApartamentoDos)
botonReset.addEventListener("click", reiniciar)
botonComenzar.addEventListener("click", inicio)

function mostrarTexto() {
    info.classList.add("visible");
    containerImg.classList.add("visible")
}

function ocultarTodo(){
    info.classList.add("invisible");
    containerImg.classList.add("invisible")

    setTimeout(function() {
        seccionPrincipal.style.display = "none";
        mostrarApartamentos();
    }, 500);
}

function mostrarApartamentos() {
    seccionApartamentos.style.display = "flex"
   
    setTimeout(function() {
        seccionApartamentos.classList.add("visible")
    }, 500);
}

function mostrarApartamentoUno(){
    seccionApartamentos.classList.add("invisible")
    seccionApartamentoUno.style.display = "flex"

    setTimeout(function() {
        seccionApartamentoUno.classList.add("visible")
    }, 500);
}

function mostrarApartamentoDos(){
    seccionApartamentos.classList.add("invisible")
    seccionApartamentoDos.style.display = "flex"

    setTimeout(function() {
        seccionApartamentoDos.classList.add("visible")
    }, 500);
}

function reiniciar(){
    location.reload();
}

function inicio(){
    seccionPresentacion.classList.add("mover")
    seccionPrincipal.style.display = "flex"
    header.style.display = "flex"

    setTimeout(function() {
        seccionPresentacion.style.display = "none"
    }, 1500);
}
