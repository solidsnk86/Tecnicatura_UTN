const $body = document.body;
const archivoTXT = "/javascript/Sintáxis JS y Java.txt";
$body.style.background = "#21252B";
$body.style.color = "#fff";
$body.style.width = "50%";
$body.style.justifyContent = "center";
$body.style.margin = "0 auto";
$body.style.textWrap = "balance";

function crearHTML(datos) {
  $body.innerHTML = `
  <div>
    <p>${datos}</p>
  </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  const leerArchivo = async () => {
    const respuesta = await fetch(archivoTXT);
    const txt = await respuesta.text();
    const formatedTXT = txt.replace(/\n/g, "<br>");
    return crearHTML(formatedTXT);
  };
  leerArchivo();
});
