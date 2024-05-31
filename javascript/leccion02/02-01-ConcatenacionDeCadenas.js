var nombre = "Pedro";
var apellido = " Montes";
var nombreCompleto = nombre + " " + apellido; // Primera concatenación
console.log(nombreCompleto);

var nombreCompleto2 = "Diego" + " " + "De la Vega"; // Segunda concatenación
console.log(nombreCompleto2);
var juntos = nombre + 219;
console.log(juntos);
juntos = nombre + 78 + 17; // Aquí se puede diferenciar a través de los paréntisis
console.log(juntos);
juntos = 78 + 17 + nombre; // Primero se resuleve de izquierda a derecha (Va a sumar primero y después concatenar)
console.log(juntos);

nombre += apellido; // Operador simplificado
console.log(nombre);
