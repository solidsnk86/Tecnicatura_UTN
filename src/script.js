const $ = (selector) => document.querySelector(selector);
const $body = $("#root");
const $h1 = $("h1");
const $h2 = $("h2");
const $pre = $("#list");
const $p = $("#description");
const $footer = $("footer");
const fileName = "historia.txt";
const stylesData = [
  "background-color: #3163c66e; color: #fff; text-wrap: balance; padding: 10px; border: 1px solid #666; font-family: system-ui; border-radius: 8px;",
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
  <li>Comandos básicos de Git Bash</li>
  <pre>
# Inicializar un nuevo repositorio Git en un directorio existente
git init

# Clonar un repositorio Git existente desde una URL remota
git clone <URL>

# Agregar archivos al área de preparación para su posterior confirmación
git add <file>

# Confirmar los cambios en el repositorio con un mensaje descriptivo
git commit -m "Mensaje de confirmación"

# Configurar nuestras credenciales en git
git config user.email "micorreo-electronico@mail.com"
git config user.name "Mi Nombre"

# Ver el estado actual del repositorio, incluyendo archivos sin seguimiento, modificados y en el área de preparación
git status

# Ver un registro de cambios y confirmaciones en el repositorio
git log

# Crear una nueva rama para trabajar en paralelo con la rama actual
git branch <branch_name>

# Cambiar a una rama específica
git checkout <branch_name>

# Fusionar una rama específica en la rama actual
git merge <branch_name>

# Actualizar el repositorio local con los cambios desde el repositorio remoto
git pull

# Subir los cambios locales al repositorio remoto
git push
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
      throw new Error("Error al cargar el archivo.");
    }
    const file = await response.text();
    reader.readAsText(new Blob([file], { type: "text/plain" }));
  };

  const createHTML = (data) => {
    $body.innerHTML = `
      <div>
        <p style="${stylesData.join()}">${data}</p>
      </div>
    `;
  };

  fetchData();
});

document.title = "Lector de archivos JS";
