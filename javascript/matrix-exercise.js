/**
 * Reemplazar los ceros (0) en la matriz por el emoji del fantasma (👻),
 * podemos recorrer cada elemento de la matriz y verificar si el valor es 0.
 * Si es así, lo reemplazamos por el emoji.
 */

const matrix = [
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3],
];

function solution(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][j] = "👻";
      }
    }
  }
  return matrix;
}

function showName({ name, lastName, age }) {
  return console.log(`Mi nombre es: ${name} ${lastName}, Edad: ${age}`);
}

console.log(solution(matrix));

const fullName = {
  name: "Gabriel",
  lastName: "Calcagni",
  age: 38,
};

showName(fullName);
