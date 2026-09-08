function titleCase(str) {
  const result = str
    // .trim()
    .split(/\s+/)
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
  return result;
}

console.log(titleCase("sHoRt AnD sToUt"));
