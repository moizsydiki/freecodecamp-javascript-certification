function pyramid(character, number, inverted) {
  let result = "\n";
  for (let i = 1; i <= number; i++) {
    let row = "";

    const chars = inverted ? 2 * (number - i + 1) - 1 : 2 * i - 1;
    const spaces = (2 * number - 1 - chars) / 2;
    for (let s = 0; s < spaces; s++) {
      row += " ";
    }
    for (let c = 0; c < chars; c++) {
      row += character;
    }
   result += row + "\n";
  }
  return result;
}

console.log(pyramid("p", 5, true));
