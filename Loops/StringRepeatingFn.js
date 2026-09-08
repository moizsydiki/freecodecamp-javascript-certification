function repeatStringNumTimes(str, number) {
  let result = "";

  if (number >= 1) {
    for (let i = 0; i < number; i++) {
      result += str;
    }
  } else if (number <= 0) {
    return result;
  }
  return result;
}

console.log(repeatStringNumTimes("Moiz", 0));
