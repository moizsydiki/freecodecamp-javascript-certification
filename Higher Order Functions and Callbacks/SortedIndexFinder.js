function getIndexToIns(arr, num) {
  const sortedArr = arr.sort((a, b) => a - b);
  const index = sortedArr.findIndex((el) => el >= num);
  return index === -1 ? sortedArr.length : index;
}

console.log(getIndexToIns([], 11));
