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
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    console.log("La página está oculta");
  } else {
    console.log("La página está visible");
  }
});
