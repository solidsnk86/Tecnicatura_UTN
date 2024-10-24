export class Orden {
  static idOrden = 0;
  static MAX_PRODUCTOS = 5;

  constructor() {
    this._idOrden = ++Orden.idOrden;
    this._productos = [];
    Orden.contadorProductosAgregados();
    this._contadorProductosAgregados = 0;
  }

  get idOrden() {
    return this._idOrden;
  }

  agregarProductos(producto) {
    if (this._productos.length < Orden.MAX_PRODUCTOS) {
      this._productos.push(producto);
    } else {
      console.log(`Máximo de productos ${Orden.MAX_PRODUCTOS}`);
    }
  }
}
