const $ = (el) => document.querySelector(el);
const $body = document.body;

function styleText(palabra) {
  return `<span style="text-decoration: underline; color: purple;">"${palabra}"</span>`;
}

function saveToLocal(palabra, contador) {
  let jsonForm = JSON.parse(localStorage.getItem("templates")) || {};

  if (!Array.isArray(jsonForm.palabra)) {
    jsonForm.palabra = [];
  }
  if (!Array.isArray(jsonForm["cantidad-letras"])) {
    jsonForm["cantidad-letras"] = [];
  }

  jsonForm.palabra.push(palabra);
  jsonForm["cantidad-letras"].push(contador);

  const dataJSON = JSON.stringify(jsonForm);
  localStorage.setItem("templates", dataJSON);
}

function wordsCounter(palabra) {
  let counter = 0;
  for (const letra of palabra) {
    counter++;
  }
  return counter;
}

function loadFromLocal() {
  let jsonForm = JSON.parse(localStorage.getItem("templates")) || {};

  if (
    Array.isArray(jsonForm.palabra) &&
    Array.isArray(jsonForm["cantidad-letras"])
  ) {
    jsonForm.palabra.forEach((palabra, index) => {
      const wordCount = jsonForm["cantidad-letras"][index];
      const styledText = styleText(palabra);
      const clonedTemplate = document
        .querySelector("#word-template")
        .content.cloneNode(true);

      clonedTemplate.querySelector(
        "li"
      ).innerHTML = `La cantidad de letras de la palabra ${styledText} es: ${wordCount}`;

      $("#results").appendChild(clonedTemplate);
    });
  }
}

function deleteLocal() {
  const deleteButton = $("#delete");
  deleteButton.addEventListener("click", () => {
    localStorage.clear();
    location.reload();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const $input = $("input");
  const $template = $("#word-template");

  loadFromLocal();

  $("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const wordCount = wordsCounter($input.value.replace(/\s+/g, ""));
    const styledText = styleText($input.value);
    const clonedTemplate = $template.content.cloneNode(true);

    clonedTemplate.querySelector(
      "li"
    ).innerHTML = `La cantidad de letras de la palabra ${styledText} es: ${wordCount}`;

    saveToLocal($input.value, wordCount);

    $("#results").appendChild(clonedTemplate);
    $input.value = "";
  });
  deleteLocal();
});
