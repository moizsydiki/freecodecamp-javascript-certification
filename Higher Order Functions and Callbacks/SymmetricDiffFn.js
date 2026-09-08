function diffArray(arr1, arr2) {
  const onlyArr1 = arr1.filter((item) => !arr2.includes(item));
  const onlyArr2 = arr2.filter((item) => !arr1.includes(item));
  const result = onlyArr1.concat(onlyArr2);
  return result;
}

console.log(diffArray(["diamond", "apple"], ["stick", "emerald", "bread"]));
