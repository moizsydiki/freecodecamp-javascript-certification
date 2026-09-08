function uniteUnique(...args) {
  return [...new Set(args.flat())].sort((a, b) => a - b);
}

console.log(uniteUnique([1, 2, 4], [2, 3, 5], [5, 6, 7], [9, 8, 7]));
