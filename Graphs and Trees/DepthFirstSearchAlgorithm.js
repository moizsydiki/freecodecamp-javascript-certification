const dfs = (graph, root) => {
  const visited = new Array(graph.length).fill(false);
  const result = [];

  const traverse = (node) => {
    visited[node] = true;
    result.push(node);

    for (let i = 0; i < graph.length; i++) {
      if (graph[node][i] === 1 && !visited[i]) {
        traverse(i);
      }
    }
  };

  traverse(root);

  return result;
};

console.log(
  dfs(
    [
      [0, 1, 0, 0],
      [1, 0, 1, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0],
    ],
    3,
  ),
);
