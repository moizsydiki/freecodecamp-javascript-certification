function flattenArr(arr) {
  const flatten = arr.flat(Infinity);
  return flatten;
}

console.log(flattenArr([1, [2, 3], 4]));
