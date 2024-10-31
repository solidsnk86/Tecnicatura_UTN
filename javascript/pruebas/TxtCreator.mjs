class TxtCreator {
  static async getData(url) {
    let data;
    const res = await fetch(url);
    data = res.json();
    return data;
  }
}

// document.addEventListener("DOMContentLoaded", async () => {
//   const data = await TxtCreator.getData("https://geolocation.microlink.io");
//   const contenido = `Dirección IP: ${data.ip.address}\nCiudad: ${data.city.name}\nPaís: ${data.country.name}`;
//   const blob = new Blob([contenido], { type: "text/plain" });
//   const enlace = document.createElement("a");
//   enlace.href = URL.createObjectURL(blob);
//   enlace.download = "archivo.txt";

//   document.body.appendChild(enlace);
//   enlace.click();

//   document.body.removeChild(enlace);
//   URL.revokeObjectURL(enlace.href);
// });
function llenarMatriz(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][j] = "🧨";
      }
    }
  }
  return matrix;
}

const matrix = [
  [1, 2, 3, 4, 5, 6],
  [0, 2, 3, 4, 6, 9],
  [0, 2, 3, 5, 0, 1],
];
llenarMatriz(matrix);
console.log(matrix);
