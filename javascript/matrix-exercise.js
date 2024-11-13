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

function showName(obj) {
  return console.log(
    `Mi nombre es: ${obj.name} ${obj.lastName}, Edad: ${obj.age}`
  );
}

console.log(solution(matrix));

const fullName = {
  name: "Gabriel",
  lastName: "Calcagni",
  age: 38,
};

showName(fullName);

let position = []

function ghostMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const currentPosition = j;
      if (matrix[i][j] === 0) {
        matrix[i][j] = "👻";
        position.push(currentPosition)
      }
    }
  }
  return matrix;
}

const matrix1 = [
  [0, 2, 3, 4, 5, 6],
  [2, 4, 7, 8, 4, 0],
  [1, 0, 3, 4, 6, 9],
];
const mat = ghostMatrix(matrix1)
const result = position.forEach((pos, i) => {
  console.log(`El ${i + 1}° 👻 se encuentra en la posición ${pos}`)
})


function humanVsZombies(humans, zombies) {
  let h = 0, z = 0;

  for (let i = 0; i < humans.length; i++) {
    h += Number(humans[i])
    z += Number(zombies[i])
  }
  if (h === z) return 'x'
  return `${Math.abs(h - z)}${h > z ? 'h' : 'z'}`
}
const zombies = '243'
const humanos = '313'
console.log(humanVsZombies(humanos, zombies))