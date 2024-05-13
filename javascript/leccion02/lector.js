const $body = document.body;
const archivoTXT = "/javascript/Sintáxis JS y Java.txt";
const archivoJS = "/javascript/leccion02/02-01-TiposDatos.js";

$body.style.background = "#21252B";
$body.style.color = "#fff"
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

function crearPRE(codigo) {
  $body.innerHTML = `
  <div>
    <pre>
    <code lang="javascript">
      ${codigo}
    </code>
    </pre>
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

  const fetchJS = async () => {
    const respuesta = await fetch(archivoJS);
    const js = await respuesta.text();
    return crearPRE(js);
  };
  leerArchivo();
  fetchJS();
});
