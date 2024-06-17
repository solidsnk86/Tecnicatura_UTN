const $ = (el) => document.querySelector(el);

const styles = {
  background: "rgba(236, 236, 236, 0.582)",
  color: "yellow",
  "font-style": "italic",
  "padding-inline": "4px",
  "border-radius": "4px",
};

const preStyles = {
  "background-color": "#1E2227",
  color: "green",
  width: "100%",
  padding: "8px",
  "border-bottom": "1px solid #2D2E32",
  "border-left": "1px solid #2D2E32",
  "border-radius": "4px",
  "font-family": "Cascadia Code PL SemiBold",
  "font-size": "14px",
};

const styledText = (children) => {
  const styledText = Object.entries(styles)
    .map(([key, value]) => `${key}: ${value}`)
    .join(";");
  return `<span style="${styledText}">${children}</span>`;
};

const styledPre = (children) => {
  const styledPre = Object.entries(preStyles)
    .map(([key, value]) => `${key}: ${value}`)
    .join(";");
  return `<pre style="${styledPre}">${children}</pre>`;
};

// Contador de vocales
function vowelsCounter(frase) {
  const vowels = "aeiouAEIOUáéíóúÁÉÍÓÚ";
  let counter = 0;
  for (const letra of frase) {
    if (vowels.includes(letra)) {
      counter++;
    }
  }
  return counter;
}

// Otro bucle contador de vocales
function vowelsCounter2(frase) {
  const vowels = "aeiouAEIOUáéíóúÁÉÍÓÚ";
  let counter = 0;
  for (let i = 0; i < frase.length; i++) {
    if (vowels.includes(frase[i])) {
      counter++;
    }
  }
  return counter;
}
// Arrays
const frutas = [
  "🍎",
  "🍏",
  "🍇",
  "🍈",
  "🍉",
  "🍊",
  "🍌",
  "🍍",
  "🥭",
  "🍋",
  "🥝",
  "🥑",
  "🍓",
  "🍒",
  "🍑",
];

function printFruit(fruits) {
  let result = "Frutas: ";
  for (let i = 0; i < fruits.length; i++) {
    result += fruits[i];
  }
  return ($(".result-container-2").innerHTML = result);
}
$(".pre-1").innerHTML = `${styledPre(printFruit)}`;
$(".result-container-3").innerHTML = printFruit(frutas);

function parImpar(...nums) {
  const group = {
    Par: [],
    Impar: [],
  };
  nums.forEach((n) => {
    n % 2 === 0 ? group.Par.push(n) : group.Impar.push(n);
  });
  return group;
}
$(".pre-2").innerHTML = `${styledPre(parImpar)}`;
const result = parImpar(1, 2, 3, 4, 5, 6, 7, 8, 9);
$(".result-container-3").innerHTML = `Par: ${styledText(
  result.Par.join(", ")
)} Impar: ${styledText(result.Impar.join(", "))}`;

document.addEventListener("DOMContentLoaded", () => {
  const $input = $("input");
  const template = $("#result-template").content;

  $("form").addEventListener("submit", (event) => {
    event.preventDefault();

    const clone = template.cloneNode(true);
    clone.querySelector(".result").innerHTML = `
      <p>La palabra ${styledText($input.value)} contiene ${vowelsCounter2(
      $input.value
    )} vocales.</p>
    `;

    const resultContainer = $(".result-container");
    resultContainer.innerHTML = "";
    resultContainer.appendChild(clone);
    $input.value = "";
  });
});

