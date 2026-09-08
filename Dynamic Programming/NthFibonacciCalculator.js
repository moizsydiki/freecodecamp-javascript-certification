const fibonacci = (n) => {
  const sequence = [0, 1];

  if (n <= 1) {
    return sequence[n];
  }

  for (let i = 2; i <= n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }

  return sequence[n];
};

console.log(fibonacci(6));
