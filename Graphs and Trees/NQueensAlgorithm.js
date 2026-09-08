function dfsNQueens(n) {
  if (n < 1) {
    return [];
  }

  const solutions = [];

  function dfs(row, board) {
    // Base case: all rows have a queen
    if (row === n) {
      solutions.push([...board]);
      return;
    }

    // Try every column in the current row
    for (let col = 0; col < n; col++) {
      let valid = true;

      // Check against previously placed queens
      for (let prevRow = 0; prevRow < row; prevRow++) {
        const prevCol = board[prevRow];

        // Same column
        if (prevCol === col) {
          valid = false;
          break;
        }

        // Same diagonal
        if (Math.abs(prevCol - col) === Math.abs(prevRow - row)) {
          valid = false;
          break;
        }
      }

      // Place queen if valid
      if (valid) {
        board.push(col);
        dfs(row + 1, board);
        board.pop(); // Backtrack
      }
    }
  }

  dfs(0, []);

  return solutions;
}
