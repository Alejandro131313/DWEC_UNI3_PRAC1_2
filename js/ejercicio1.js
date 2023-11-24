const ARRAY = ["zapato", "tablero", "Alejandro", "armario", "cocina", "ordenador", "coche", "juego", "deporte", "asignatura", "Alejandro", "armario", "cocina", "ordenador", "coche", "juego", "deporte", "asignatura"];


const letras = document.getElementById("letras");
const palabraIntroducida = document.getElementById("palabra");
const nuevaPalabra = document.getElementById("nueva");
const solucion = document.getElementById("solucion");
const finalizar = document.getElementById("finalizar");
const resultado = document.getElementById("resultado");
const porcentaje = document.getElementById("porcentaje");
const info = document.getElementById("info");
const intentos = document.getElementById("intentos");

let palabraActual = "";
let letrasCorrectas = 0;
let intentosRealizados=1;
let aciertos = 0;
  

function PalabraAleatoria() {
  palabraActual = ARRAY[Math.floor(Math.random() * ARRAY.length)];

  letras.value = palabraActual.split("").sort(() => Math.random() - 0.5).join("").toUpperCase();
  nuevaPalabra.disabled=false;
}


function DarNuevaPalabra() {
  intentosRealizados++;
  palabraActual = ARRAY[Math.floor(Math.random() * ARRAY.length)];
  letras.value = palabraActual.split("").sort(() => Math.random() - 0.5).join("").toUpperCase();
  palabraIntroducida.value = "";
  solucion.disabled=false;
  info.style.visibility = "hidden";
  intentos.style.visibility = "hidden"; 
}

function MostrarSolucion() {
 
  solucion.disabled=true;

  const palabraOrdenada = palabraActual;
  document.getElementById("palabraOrdenada").textContent = palabraOrdenada;
 info.style.visibility = "visible";

}


function Acierto() {
  letrasIngresadas = palabraIntroducida.value.toUpperCase();
  
  if (letrasIngresadas === palabraActual.toUpperCase()) {
    aciertos++;
    document.getElementById("palabraAcertada").textContent = palabraActual;
    intentos.style.color = "green";
    intentos.style.visibility = "visible";
    solucion.disabled = true;
  } else {
    solucion.disabled = false;
    intentos.style.visibility = "hidden"; 
  }
}

function CalcularPorcentajeAciertos() {
  porcentajeaciertos = (aciertos / intentosRealizados) * 100;
  porcentaje.textContent = "Porcentaje de aciertos: "+   porcentajeaciertos.toFixed(2)+"%";

}


function FinJuego() {
  CalcularPorcentajeAciertos();
  nuevaPalabra.disabled = true;
  solucion.disabled = true;
  finalizar.disabled = true;
  porcentaje.style.visibility = "visible";
  
}

function Mayuscula() {
  palabraIntroducida.value=palabraIntroducida.value.toUpperCase();
}
document.addEventListener("DOMContentLoaded", PalabraAleatoria);
palabraIntroducida.addEventListener("input",Acierto);
nuevaPalabra.addEventListener("click", DarNuevaPalabra);
solucion.addEventListener("click", MostrarSolucion);
finalizar.addEventListener("click", FinJuego);
palabraIntroducida.addEventListener("keyup", Mayuscula);