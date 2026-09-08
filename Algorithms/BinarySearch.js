function binarySearch(searchList, value) {
  let pathToTarget = [];
  let low = 0;
  let high = searchList.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let valueAtMiddle = searchList[mid];
    pathToTarget.push(valueAtMiddle);

    if (value === valueAtMiddle) {
      return [pathToTarget, `Value found at index ${mid}`];
    } else if (value > valueAtMiddle) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return [[], "Value not found"];
}

console.log(binarySearch([1, 2, 3, 4, 5], 3));
console.log(binarySearch([1, 2, 3, 4, 5, 9], 4));
console.log(binarySearch([1, 3, 5, 9, 14, 22], 10));

// const binarySearch = (arr, target) => {
//   let low = 0;
//   let high = arr.length - 1;

//   while (low <= high) {
//     const mid = Math.floor((low + high) / 2);

//     if (arr[mid] === target) {
//       return mid;
//     } else if (arr[mid] < target) {
//       low = mid + 1;
//     } else {
//       high = mid - 1;
//     }
//   }
//   return -1;
// };

// console.log(binarySearch([10, 20, 30, 40, 50, 60, 70, 80, 90], 100));
