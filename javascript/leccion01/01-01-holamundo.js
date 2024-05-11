let myArray = ["h", "o", "l", "a", "m", "u", "n", "d", "o"];

const mixArray = (num) => {
  for (let i = num.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [num[i], num[j]] = [num[j], num[i]];
  }
  return num;
};

const mixedArray = mixArray([...myArray]);

if (mixedArray) {
  document.write(myArray.join(" ").toUpperCase());
  document.writeln("<p>" + mixedArray.join(" ") + "</p>");
}
