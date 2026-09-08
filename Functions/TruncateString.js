function truncateString(str, num) {
  if (str.length > num) {
    const slicedStr = str.slice(0, num);
    const final = slicedStr.padEnd(num + 3, ".");
    return final;
  } else {
    return str;
  }
}

console.log(truncateString("moiz siddiqui", 3));
