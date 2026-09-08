function adjacencyListToMatrix(adjList) {
  const size = Object.keys(adjList).length;

  // Create a size x size matrix filled with 0s
  const matrix = Array.from({ length: size }, () => Array(size).fill(0));

  // Fill the matrix
  for (const vertex in adjList) {
    for (const neighbor of adjList[vertex]) {
      matrix[vertex][neighbor] = 1;
    }
  }

  // Print each row
  matrix.forEach((row) => console.log(row));

  // Return the matrix
  return matrix;
}

console.log(
  adjacencyListToMatrix([
    [0, 0, 1, 0],
    [0, 0, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 0],
  ]),
);
