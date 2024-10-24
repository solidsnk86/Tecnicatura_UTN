import { Orden } from "./Orden.mjs";
import { Producto } from "./Producto.mjs";

const cuerpoProductos = document.querySelector("#cuerpo-productos");
const agregarBtn = document.querySelector("#agregar-producto");
const resetBtn = document.querySelector("#reset");
const total = document.getElementById("total");

// Función para crear el contenido de la tabla
const createContent = (id, nombre, precio, cantidad) => `
    <tr id="producto${id}">
        <td id="id">${id}</td>
        <td id="nombre">${nombre}</td>
        <td id="precio">$${precio}</td>
        <td id="cantidad">${cantidad}</td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td id="sub">Sub-Total: $${cantidad * precio}</td>
    </tr>
`;

// Función para guardar el array de productos en localStorage
const saveProducts = (productos) => {
  localStorage.setItem("productos", JSON.stringify(productos));
};

// Función para cargar los productos guardados en localStorage
const loadProducts = () => {
  const productosGuardados = localStorage.getItem("productos");
  return productosGuardados ? JSON.parse(productosGuardados) : [];
};

// Cargar los productos al inicio
let productos = loadProducts();

productos.forEach((producto) => {
  cuerpoProductos.innerHTML += createContent(
    producto.id,
    producto.nombre,
    producto.precio,
    producto.cantidad
  );
});

// Evento para agregar un nuevo producto
agregarBtn.addEventListener("click", () => {
  const nombre = prompt("Ingrese el nombre del producto: ");
  const precio = parseFloat(prompt("Indique un precio para el producto: "));
  const cantidad = parseInt(prompt("Ingresa la cantidad: "), 10);

  if (!nombre || isNaN(precio) || isNaN(cantidad))
    return alert("Por favor, ingrese todos los datos correctamente.");

  const producto = new Producto(nombre, precio);
  const orden = new Orden();
  orden.agregarProductos(producto);
  const nuevoProducto = {
    id: producto.id,
    nombre: producto._nombre,
    precio: Number(producto._precio),
    cantidad: cantidad,
    total: orden.calculatTotal(),
  };

  // Agregar el nuevo producto al array
  productos.push(nuevoProducto);

  // Guardar el array actualizado en localStorage
  saveProducts(productos);

  // Agregar el producto a la tabla
  cuerpoProductos.innerHTML += createContent(
    nuevoProducto.id,
    nuevoProducto.nombre,
    nuevoProducto.precio,
    nuevoProducto.cantidad
  );
});

// Evento para resetear la página y limpiar localStorage
resetBtn.addEventListener("click", () => {
  location.reload();
  localStorage.clear();
});

// const producto1 = new Producto("Memoria RAM", 34600);
// const producto2 = new Producto("CPU Ryzen 9", 657030);
// const producto3 = new Producto("Placa Madre", 275050);
// const producto4 = new Producto("Gabinete", 87000);
// const producto5 = new Producto("Disco SSD 240GB", 82000);
// const producto6 = new Producto("Cooler", 45000);
// const orden = new Orden();
// orden.agregarProductos(producto1);
// orden.agregarProductos(producto2);
// orden.agregarProductos(producto3);
// orden.agregarProductos(producto4);
// orden.agregarProductos(producto5);
// orden.agregarProductos(producto6);
// orden.mostarOrden();
