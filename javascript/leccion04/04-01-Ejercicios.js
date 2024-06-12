// Ejercicio 1: Determinar Estación del Año según la fecha actual

function formatDate(date) {
  const formattedDate = new Date(date).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
  return formattedDate;
}

function esFechaEnRango(fecha, inicio, fin) {
  const [diaInicio, mesInicio] = inicio.split(" de ");
  const [diaFin, mesFin] = fin.split(" de ");

  const date = new Date(fecha);
  const year = date.getFullYear();

  const fechaInicio = new Date(`${mesInicio} ${diaInicio}, ${year}`);
  const fechaFin = new Date(`${mesFin} ${diaFin}, ${year}`);

  if (fechaFin < fechaInicio) {
    fechaFin.setFullYear(year + 1);
  }

  return date >= fechaInicio && date <= fechaFin;
}

function determinarEstacion() {
  const date = new Date();

  const veranoInicio = "21 de diciembre";
  const veranoFin = "20 de marzo";
  const otonoInicio = "21 de marzo";
  const otonoFin = "20 de junio";
  const inviernoInicio = "21 de junio";
  const inviernoFin = "20 de septiembre";
  const primaveraInicio = "21 de septiembre";
  const primaveraFin = "20 de diciembre";

  if (esFechaEnRango(date, veranoInicio, veranoFin)) {
    console.log("Usted se encuentra en Verano");
  } else if (esFechaEnRango(date, otonoInicio, otonoFin)) {
    console.log("Usted se encuentra en Otoño");
  } else if (esFechaEnRango(date, inviernoInicio, inviernoFin)) {
    console.log("Usted se encuentra en Invierno");
  } else if (esFechaEnRango(date, primaveraInicio, primaveraFin)) {
    console.log("Usted se encuentra en Primavera");
  }
}

determinarEstacion();
