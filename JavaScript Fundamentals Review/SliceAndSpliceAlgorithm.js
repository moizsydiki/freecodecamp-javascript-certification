function frankenSplice(arr1, arr2, idx) {
  let result = arr2.slice();
  result.splice(idx, 0, ...arr1);
  return result;
}
console.log(frankenSplice([2, 3, 4], [1, 5, 6], 1));
