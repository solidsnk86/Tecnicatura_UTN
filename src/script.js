const $ = (selector) => document.querySelector(selector);
const $body = $("#root");
const $root02 = $("#root02");
const $h1 = $("h1");
const $h2 = $("h2");
const $pre = $("#list");
const $p = $("#description");
const $p2 = $("#description2");
const $footer = $("footer");
const fileName = "historia.txt";
const stylesData = [
  "background-color: #4071d36e; color: #fff; text-wrap: balance; padding: 10px; border: 1px solid #555; font-family: system-ui; border-radius: 8px; overflow: auto;",
];
$h1.innerHTML = "Clase de Git Bash • UTN-FRSR";
$h2.innerHTML = "Historia de Git";
$p.style.color = "#fff";
$p.innerHTML = `Aquí un poco de historia sobre Git y cómo se creó. Este fragmento es un fetch del archivo ${styleText(
  "historia.txt"
)} el cual se puede editar y se verá reflejado el cambio aquí:`;
$pre.style.color = "#fff";
$p2.innerHTML = "Archivo TXT (Sintáxis JS y Java)";

function styleText(string) {
  return `<span style="background-color: #3A3F4B; padding: 2px; border-radius: 4px;">${string}</span>`;
}

$footer.innerHTML = `${new Date().getFullYear()} &copyGabriel Calcagni`;

document.addEventListener("DOMContentLoaded", () => {
  const reader = new FileReader();

  reader.onload = async () => {
    const data = await reader.result;
    crearLista();
    createHTML01(data);
    createHTML02();
  };

  const leerTXT01 = async () => {
    const response = await fetch(fileName);
    if (!response.ok) {
      throw new Error("Error al cargar el archivo txt.", fileName);
    }
    const file = await response.text();
    reader.readAsText(new Blob([file], { type: "text/html" }));
  };

  const createHTML01 = (data) => {
    $body.innerHTML = `
      <div style="${stylesData.join()}">
        ${data}
      </div>
    `;
  };

  const leerTXT02 = async () => {
    const respuesta = await fetch("javascript/Sintáxis JS y Java.txt");
    const txt = await respuesta.text();
    const formatedTXT = txt.replace(/\n/g, "<br>");
    return createHTML02(formatedTXT);
  };

  function createHTML02(datos) {
    $root02.innerHTML = `
    <div class="txt02">
      <p>${datos}</p>
    </div>
    `;
  }

  function crearLista(md) {
    $pre.innerHTML = `
    <p>Comandos de Git Bash:</p>
    <pre>
      <code lang="markdown">${md}</code>
    </pre> 
    `;
  }

  const leerReadmeMD = async () => {
    const respuesta = await fetch("README.md");
    const md = await respuesta.text();
    return crearLista(md);
  };

  leerTXT01();
  leerTXT02();
  leerReadmeMD();
});

document.title = "Lector de archivo TXT";
