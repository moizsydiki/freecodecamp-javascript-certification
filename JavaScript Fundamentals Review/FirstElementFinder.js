function findElement(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) return arr[i];
  }
}

console.log(findElement([9, 7, 5, 3, 8], (num) => num % 2 === 0));
