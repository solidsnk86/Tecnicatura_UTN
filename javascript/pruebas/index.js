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

const csv = await getData();

console.log(csv.map((neo) => neo.ciudad))
