function largestOfAll(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let largest = arr[i][0];

    for (let k = 0; k < arr[i].length; k++) {
      if (arr[i][k] > largest) {
        largest = arr[i][k];
      }
    }
    result.push(largest);
  }
  return result;
}

console.log(
  largestOfAll([
    [9, 211, 41, 106, 22],
    [99, 118, 64, 3, 7],
    [67, 54, 41, 170, 12],
    [98, 89, 4, 9, 99],
  ])
);
