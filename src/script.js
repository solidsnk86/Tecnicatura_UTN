const $ = (selector) => document.querySelector(selector);
const $body = $("#root");
const $h1 = $("h1");
const $h2 = $("h2");
const $pre = $("#list");
const $p = $("#description");
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

function styleText(string) {
  return `<span style="background-color: #3A3F4B; padding: 2px; border-radius: 4px;">${string}</span>`;
}

$footer.innerHTML = `${new Date().getFullYear()} &copyGabriel Calcagni`;

function createList() {
  $pre.innerHTML = `
  <p>Comandos de Git Bash:</p>
<pre>
<span style="color: gray;"># Inicializar un nuevo repositorio Git en un directorio existente</span>
git init
  
<span style="color: gray;"># Clonar un repositorio Git existente desde una URL remota</span>
git clone "URL"
  
<span style="color: gray;"># Agregar archivos al área de preparación para su posterior confirmación</span>
git add "file"
  
<span style="color: gray;"># Confirmar los cambios en el repositorio con un mensaje descriptivo</span>
git commit -m "Mensaje de confirmación"
  
<span style="color: gray;"># Configurar nuestras credenciales en git</span>
git config user.email "micorreo-electronico@mail.com"
git config user.name "Mi Nombre"
  
<span style="color: gray;"># Ver el estado actual del repositorio, incluyendo archivos sin seguimiento, modificados y en el área de preparación</span>
git status
  
<span style="color: gray;"># Ver un registro de cambios y confirmaciones en el repositorio</span>
git log
  
<span style="color: gray;"># Crear una nueva rama para trabajar en paralelo con la rama actual</span>
git branch <branch_name>
  
<span style="color: gray;"># Cambiar a una rama específica</span>
git checkout <branch_name>
  
<span style="color: gray;"># Fusionar una rama específica en la rama actual</span>
git merge <branch_name>
  
<span style="color: gray;"># Actualizar el repositorio local con los cambios desde el repositorio remoto</span>
git pull
  
<span style="color: gray;"># Subir los cambios locales al repositorio remoto</span>
git push

<span style="color: gray;"># Este comando realiza dos acciones en una sola línea</span>
<span style="color: gray;"># Agrega los archivos modificados y/o eliminados y crea un commit</span>
git commit -am "Mensaje del commit"

<span style="color: gray;"># Este comando permite agregar o arreglar el mensaje de un commit</span>
git commit -amend -m "Mensaje del commit"

<span style="color: gray;"># Este comando permite deshacer tu último commit</span>
<span style="color: gray;"># y el parámetro --soft mantiene los cambios en local</span>
git reset --soft HEAD~1

<span style="color: gray;"># Este comando permite deshacer tu último commit</span>
<span style="color: gray;"># y el parámetro --hard para borrarlos del todo</span>
git reset --hard HEAD~1

<span style="color: gray;"># Si has hecho un push al repositorio tiene arreglo</span>
<span style="color: gray;"># hacemos un <b style="color: lightgreen">git log --oneline</b> para buscar el id del commit</span>
git revert "identificador del commit" ej: b3be3e0369
</pre> 
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  const reader = new FileReader();

  reader.onload = async () => {
    const data = await reader.result;
    createList();
    createHTML(data);
  };

  const fetchData = async () => {
    const response = await fetch(fileName);
    if (!response.ok) {
      throw new Error("Error al cargar el archivo txt 😅.", fileName);
    }
    const file = await response.text();
    reader.readAsText(new Blob([file], { type: "text/html" }));
  };

  const createHTML = (data) => {
    $body.innerHTML = `
      <div style="${stylesData.join()}">
        ${data}
      </div>
    `;
  };

  fetchData();
});

document.title = "Lector de archivo TXT";
