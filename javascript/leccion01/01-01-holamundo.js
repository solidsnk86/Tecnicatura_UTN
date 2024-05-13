let miArray = ["h", "o", "l", "a", "m", "u", "n", "d", "o"];

function mixArray(num) {
  for (let i = num.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [num[i], num[j]] = [num[j], num[i]];
  }
  return num;
}

const arrayMezclado = mixArray([...miArray]);
console.log(mixArray);
if (arrayMezclado) {
  document.write(miArray.join(" ").toUpperCase());
  document.writeln("<p>" + arrayMezclado.join(" ") + "</p>");
}
