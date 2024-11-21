const api = {
  url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRhdeHyswVgUEwIQE4Fuis50gswvz4mDcgz43E1IVuRQeV5_qgw72-wwmCngbiFpIOfqksvIALohkBI/pub?output=csv",
};

const getData = async () => {
  const res = await fetch(api.url);
  const data = await res.text();
  const formatCsv = data
    .split("\n")
    .slice(1)
    .map((row) => {
      const [persona, edad, genero, correo, ciudad] = row.split(",");
      return { persona, edad, genero, correo, ciudad };
    });
  return formatCsv;
};

// window.addEventListener("blur", async () => {
//   console.log("Se ha cerrado la ventana, o se ha minimizado.");
// });
// window.addEventListener("focus", () => {
//   if (document.hasFocus()) {
//     console.log("El usuario ha vuelto a la ventana.");
//   }
// });

// También podemos usar el evento visibilitychange que es más preciso
// document.addEventListener("visibilitychange", () => {
//   if (document.hidden) {
//     console.log("La página está oculta");
//   } else {
//     console.log("La página está visible");
//   }
// });

export function findSafestPath(dream) {
  const n = dream.length;
  const m = dream[0].length;

  // Creamos una matriz para almacenar los valores mínimos acumulados
  const dp = Array(n)
    .fill()
    .map(() => Array(m).fill(Infinity));

  // Inicializamos la primera posición con su valor de peligro
  dp[0][0] = dream[0][0];

  // Rellenamos la primera fila (solo movimientos hacia la derecha)
  for (let j = 1; j < m; j++) {
    dp[0][j] = dp[0][j - 1] + dream[0][j];
  }

  // Rellenamos la primera columna (solo movimientos hacia abajo)
  for (let i = 1; i < n; i++) {
    dp[i][0] = dp[i - 1][0] + dream[i][0];
  }

  // Rellenamos el resto de la matriz
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      // En cada celda, tomamos el mínimo entre venir desde arriba o desde la izquierda
      dp[i][j] =
        Math.min(
          dp[i - 1][j], // Desde arriba
          dp[i][j - 1] // Desde la izquierda
        ) + dream[i][j];
    }
  }
  // El valor en la esquina inferior derecha será el camino más seguro
  return dp[n - 1][m - 1];
}
const dream = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
];
console.log(findSafestPath(dream));
