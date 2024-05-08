const $ = (selector) => document.querySelector(selector);
const id = (id) => document.getElementById(id);

const createHTML = (nombre, apellido, edad, facultad) => {
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

  createHTML(nombre, apellido, edad, facultad);

  const jsonForm = {
    nombre: nombre,
    apellido: apellido,
    edad: edad,
    facultad: facultad,
  };
  const formData = JSON.stringify(jsonForm);
  console.log(formData);
});
