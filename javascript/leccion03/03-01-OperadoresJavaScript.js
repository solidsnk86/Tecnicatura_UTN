var num1 = prompt("Ingrese un número: ");

function parImpar(num) {
  if (num % 2 === 0) {
    alert(`El número ${num} es Par.`);
  } else {
    alert(`El número ${num} es Impar.`);
  }
}

parImpar(num1);
