// const mergeSort = (arr) => {
//   if (arr.length <= 1) {
//     return arr;
//   }

//   const mid = Math.floor(arr.length / 2);
//   const left = mergeSort(arr.slice(0, mid));
//   const right = mergeSort(arr.slice(mid));

//   const sorted = [];
//   let i = 0;
//   let j = 0;

//   while (i < left.length && j < right.length) {
//     if (left[i] <= right[j]) {
//       sorted.push(left[i]);
//       i += 1;
//     } else {
//       sorted.push(right[j]);
//       j += 1;
//     }
//   }
//   return sorted.concat(left.slice(i)).concat(right.slice(j));
// };

// console.log(mergeSort([1, 8, 7, 9, 3, 2, 5]));

function mergeSort(array) {
  if (array.length <= 1) {
    return;
  }

  const middlePoint = Math.floor(array.length / 2);
  const leftPart = array.slice(0, middlePoint);
  const rightPart = array.slice(middlePoint);

  mergeSort(leftPart);
  mergeSort(rightPart);

  let leftArrayIndex = 0;
  let rightArrayIndex = 0;
  let sortedIndex = 0;

  while (
    leftArrayIndex < leftPart.length &&
    rightArrayIndex < rightPart.length
  ) {
    if (leftPart[leftArrayIndex] < rightPart[rightArrayIndex]) {
      array[sortedIndex] = leftPart[leftArrayIndex];
      leftArrayIndex += 1;
    } else {
      array[sortedIndex] = rightPart[rightArrayIndex];
      rightArrayIndex += 1;
    }
    sortedIndex += 1;
  }

  while (leftArrayIndex < leftPart.length) {
    array[sortedIndex] = leftPart[leftArrayIndex];
    leftArrayIndex += 1;
    sortedIndex += 1;
  }

  while (rightArrayIndex < rightPart.length) {
    array[sortedIndex] = rightPart[rightArrayIndex];
    rightArrayIndex += 1;
    sortedIndex += 1;
  }
}

const numbers = [4, 10, 6, 14, 2, 1, 8, 5];
console.log("Unsorted array: ");
console.log(numbers);
mergeSort(numbers);

console.log("Sorted array: ");
console.log(numbers);
