class Producto {
  static idProducto = 0;
  static contadorProducto = 0;

  static contadorProductos() {
    return ++Producto.contadorProducto;
  }

  constructor(nombre, precio) {
    this.id = ++Producto.idProducto;
    this.contadorProducto = Producto.contadorProductos();
    this._nombre = nombre;
    this._precio = precio;
  }

  get idProducto() {
    return Producto.idProducto;
  }

  get nombre() {
    return this.nombre;
  }

  get precio() {
    return this.precio;
  }

  set nombre(nombre) {
    this._nombre = nombre;
  }

  set precio(precio) {
    this._precio = precio;
  }

  toString() {
    return `Producto: [ ID: ${this.id} Nombre: ${this._nombre} Precio: $${this._precio} ]`;
  }
}

let producto1 = new Producto("Velador", 1500);
console.log(producto1.toString());
let producto2 = new Producto("Heladera", 800600);
console.log(producto2.toString());
console.log(Producto.contadorProducto);
