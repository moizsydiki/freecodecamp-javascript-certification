function chunkArrayInGroups(arr, num) {
  const mainArr = [];

  for (let i = 0; i < arr.length; i += num) {
    const chunk = arr.slice(i, i + num);
    mainArr.push(chunk);
  }

  return mainArr;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));
