function destroyer(arr, ...item) {
  const result = arr.filter((el) => !item.includes(el));
  return result;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
