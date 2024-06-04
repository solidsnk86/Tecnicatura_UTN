// Ejercicio número 1 (Buscar números pares o impares)
var num1 = 3;
var num2 = 6;
var num3 = 9;

function parImpar(num) {
  if (num % 2 === 0) {
    console.log(`El número (${num}) es Par.`);
  } else {
    console.log(`El número (${num}) es Impar.`);
  }
}

parImpar(num1);

// Ejercicio número 2 (Verificar si es mayor de edad)
var miEdad = 38;
const mayor = 18;

function mayorDeEdad(edad) {
  if (edad >= mayor) {
    console.log(`Usted tiene ${edad} años, es mayor de edad.`);
  } else {
    console.log(`Usted tiene ${edad} años, no es mayor de edad.`);
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
  const fetchManifesto = async (url) => {
    try {
      const response = await fetch(url);
      const html = await response.text();
      let cleanedHtml = html.replace(/<script[\s\S]*?<\/script>/gi, ""); // Expresión regular que elimina todas las etiquetas <script> y su contenido
      cleanedHtml = cleanedHtml.replace(
        /<a href["principles.html"\s\S]*?<\/a>/,
        '<a href="https://agilemanifesto.org/iso/es/principles.html">Doce principios del software Ágil</a>'
      );
      cleanedHtml = cleanedHtml.replace(
        /<a\s+href=\/display\/index.html[\s\S]*?<\/a>/i,
        '<a href="https://agilemanifesto.org/display/index.html">Ver firmantes</a>'
      );
      cleanedHtml = cleanedHtml.replace(
        /<a href=\/authors.html[\s\S]*?<\/a>/,
        '<a href="https://agilemanifesto.org/authors.html">Sobre los autores</a>'
      );
      cleanedHtml = cleanedHtml.replace(
        /<a href=\/history.html[\s\S]*?<\/a>/,
        '<a href="https://agilemanifesto.org/history.html">Sobre el Manifiesto</a>'
      );
      return cleanedHtml;
    } catch (error) {
      throw new Error("No fue posible hacer el fetch de la url", error);
    }
  };
  const imageUrl = "https://agilemanifesto.org/background.jpg";
  async function createHTML() {
    const $body = document.body;
    $body.style.backgroundImage = `url(${imageUrl})`;
    $body.innerHTML = await fetchManifesto(url);
  }
  // Se crea etiqueta link para el favicon
  const favicon = () => {
    const linkTag = document.createElement("link");
    linkTag.rel = "shortcut icon";
    linkTag.type = "image/x-icon";
    linkTag.href = imageUrl;
    document.head.appendChild(linkTag);
  };

  favicon();
  createHTML();
});
