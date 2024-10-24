export class Producto {
  static idProducto = 0;
  static contadorProducto = 0;
  static precioProducto = 0;

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
    return this._nombre;
  }

  get precio() {
    return this._precio;
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
