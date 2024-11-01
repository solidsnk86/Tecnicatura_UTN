const getTable = async () => {
  const response = await fetch(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTcTUsaubPm4Br-t6yhtwOkD3Duq6yiD41XvqQ6KUjv4AVljPwdj4hBCH4eC81tKrF1_dthGmpaRMwf/pub?output=tsv"
  );
  const tsvTable = await response.text();
  const formattedTable = tsvTable
    .split("\n")
    .slice(1)
    .map((row) => {
      const [z, n0, n001, n002, n003, n004, n005, n006, n007, n008, n009] =
        row.split("\t");
      return { z, n0, n001, n002, n003, n004, n005, n006, n007, n008, n009 };
    });
  return formattedTable;
};

const createHTMLTable = (
  z,
  n0,
  n001,
  n002,
  n003,
  n004,
  n005,
  n006,
  n007,
  n008,
  n009
) => `
    <tr>
        <td>${z}</td>
        <td>${n0}</td>
        <td>${n001}</td>
        <td>${n002}</td>
        <td>${n003}</td>
        <td>${n004}</td>
        <td>${n005}</td>
        <td>${n006}</td>
        <td>${n007}</td>
        <td>${n008}</td>
        <td>${n009}</td>
    </tr>
  `;

document.addEventListener("DOMContentLoaded", async () => {
  const table = await getTable();
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = table
    .map((n) =>
      createHTMLTable(
        n.z,
        n.n0,
        n.n001,
        n.n002,
        n.n003,
        n.n004,
        n.n005,
        n.n006,
        n.n007,
        n.n008,
        n.n009
      )
    )
    .join("");
});
