function bouncer(arr) {
  const boolArr = arr.filter(Boolean);
  return boolArr;
}

console.log(bouncer([7, "ate", "", 9, undefined, "ten", NaN]));
