// Ejercicio número 1 (Buscar números pares o impares)
var num1 = 3;
var num2 = 6;
var num3 = 9;

function parImpar(num) {
  if (num % 2 === 0) {
    console.log(`El número ${num} es Par.`);
  } else {
    console.log(`El número ${num} es Impar.`);
  }
}

parImpar(num1);

// Ejercicio número 2 (Verificar si es mayor de edad)
var miEdad = 38;
const mayor = 18;

function mayorDeEdad(edad) {
  if (edad >= mayor) {
    console.log(`Usted tiene ${edad}, es mayor de edad.`);
  } else {
    console.log(`Usted tiene ${edad}, no es mayor de edad.`);
  }
}

mayorDeEdad(miEdad);

// Ejercicio número 3 (Dentro de un rango)
let dentroDeRango = 5;
let valMin = 0,
  valMax = 10;

function verificarRango(rango) {
  if (dentroDeRango >= valMin && dentroDeRango <= valMax) {
    console.log(`El valor ${rango} está dentro del rango.`);
  } else {
    console.log(`El valor ${rango} no está dentro del rango`);
  }
}

verificarRango(dentroDeRango);

document.addEventListener("DOMContentLoaded", () => {
  const url = "https://agilemanifesto.org/iso/es/manifesto.html";
  const fetchManisfesto = async (url) => {
    try {
      const response = await fetch(url);
      const html = await response.text();
      const cleanedHtml = html.replace(/<script[\s\S]*?<\/script>/gi, ""); // Elimina todas las etiquetas <script> y su contenido
      console.log(cleanedHtml);
      return cleanedHtml;
    } catch (error) {
      throw new Error("No fue posible hacer el fetch de la url", error);
    }
  };
  async function createHTML() {
    const $body = document.body;
    $body.style.backgroundImage =
      "url('https://agilemanifesto.org/background.jpg')";

    $body.innerHTML = await fetchManisfesto(url);
  }
  createHTML();
});
