const $ = (el) => document.querySelector(el);
const cuerpoProductos = $("#cuerpo-productos");

console.log(cuerpoProductos);

const createContent = (id, nombre, precio, cantidad) => `
    <tr id="producto1">
        <td id="id-producto1">${id}</td>
        <td id="nombre-producto1">${nombre}</td>
        <td id="precio-producto1">${precio}</td>
        <td id="cantidad-producto1">${cantidad}</td>
    </tr>
`;
