function bubbleSort(arr) {
  const sorted = [...arr];

  for (let i = 0; i < sorted.length - 1; i++) {
    for (let j = 0; j < sorted.length - 1 - i; j++) {
      if (sorted[j] > sorted[j + 1]) {
        [sorted[j], sorted[j + 1]] = [sorted[j + 1], sorted[j]];
      }
    }
  }
  return sorted;
}

const numbers = [4, 10, 6, 14, 2, 1, 8, 5];
console.log("Unsorted array: ");
console.log(numbers);
const sortedArr = bubbleSort(numbers);

console.log("Sorted array: ");
console.log(sortedArr);
