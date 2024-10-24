export class Orden {
  static idOrden = 0;
  static MAX_PRODUCTOS = 5;

  constructor() {
    this._idOrden = ++Orden.idOrden;
    this._productos = [];
    Orden.MAX_PRODUCTOS;
    this._contadorProductosAgregados = 0;
  }

  get idOrden() {
    return this._idOrden;
  }

  agregarProductos(producto) {
    if (this._productos.length < Orden.MAX_PRODUCTOS) {
      this._productos.push(producto);
    } else {
      console.log(
        `No se puede agregar más productos en la orden, máximo de productos ${Orden.MAX_PRODUCTOS}`
      );
    }
  }

  calculatTotal() {
    let totalVenta = 0;
    for (let producto of this._productos) {
      totalVenta += producto.precio;
    }
    return totalVenta;
  }

  mostarOrden() {
    let productosOrden = "";
    for (let orden of this._productos) {
      productosOrden += "\n" + orden.toString() + " ";
    }
    console.log(
      `Orden: ${
        this._idOrden
      }, Total: $${this.calculatTotal()}, Productos: ${productosOrden}`
    );
    return productosOrden;
  }
}
