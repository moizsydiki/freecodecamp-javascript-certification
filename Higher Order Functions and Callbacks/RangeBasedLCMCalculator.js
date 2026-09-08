function smallestCommons(arr) {
  const [min, max] = arr.sort((a, b) => a - b);

  const range = [];
  for (let i = min; i <= max; i++) {
    range.push(i);
  }

  let multiple = max;

  while (true) {
    const isDivisibleByAll = range.every((num) => multiple % num === 0);

    if (isDivisibleByAll) {
      return multiple;
    }
    multiple += max;
  }
}

console.log(smallestCommons([5, 1]));
