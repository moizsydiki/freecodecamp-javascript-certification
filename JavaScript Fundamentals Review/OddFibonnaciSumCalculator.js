function sumFibs(num) {
  let prev = 0;
  let curr = 1;
  let sum = 0;

  while (curr <= num) {
    if (curr % 2 !== 0) {
      sum += curr;
    }
    [prev, curr] = [curr, prev + curr];
  }

  return sum;
}

console.log(sumFibs(1000))