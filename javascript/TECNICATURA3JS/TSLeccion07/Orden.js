class Orden extends Producto {
    static idOrden = 0;
    static contadorOrdenes = 0;
    static MAX_PRODUCTOS = 5;

    static contadorProductosAgregados() {
        return ++Orden.contadorOrdenes;
    }

    constructor() {
        this._idOrden = ++Orden.idOrden
        
    }
}