const $ = (selector) => document.querySelector(selector);
const id = (id) => document.getElementById(id);

const dataPush = (nombre, apellido, edad, facultad) => {
  $("#nombre").innerText = nombre;
  $("#apellido").innerText = apellido;
  $("#edad").innerText = edad;
  $("#facultad").innerText = facultad;
};

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = id("nombre-input").value;
  const apellido = id("apellido-input").value;
  const edad = Number(id("edad-input").value);
  const facultad = id("facultad-input").value;

  // Aplicar dataPush para mostrar datos en la interfaz
  dataPush(nombre, apellido, edad, facultad);

  const jsonForm = {
    nombre: nombre,
    apellido: apellido,
    edad: edad,
    facultad: facultad,
  };

  // Obtener datos existentes del localStorage
  let savedData = window.localStorage.getItem("datos-formulario");

  let dataArray;

  if (savedData) {
    // Intentar convertir el valor a un array
    try {
      dataArray = JSON.parse(savedData);

      // Si la conversión no da un array, inicializar como vacío
      if (!Array.isArray(dataArray)) {
        dataArray = [];
      }
    } catch (error) {
      dataArray = [];
    }
  } else {
    dataArray = [];
  }

  dataArray.push(jsonForm);
  window.localStorage.setItem("datos-formulario", JSON.stringify(dataArray));
});
