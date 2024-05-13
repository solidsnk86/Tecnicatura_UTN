const $body = document.body;
const archivoTXT = "/javascript/Sintáxis JS y Java.txt";
$body.style.width = "50%"
$body.style.justifyContent = "center"
$body.style.margin = "0 auto"
$body.style.textWrap = "balance"

function crearHTML(datos) {
  $body.innerHTML = `
  <div>
    <p>${datos}</p>
  </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  const fetchArchivo = async () => {
    const respuesta = await fetch(archivoTXT);
    const txt = await respuesta.text();
    return crearHTML(txt);
  };

  const formatearTXT = () => {
    
  }
  fetchArchivo()
});
