function equalPairs(grid: number[][]): number {
  const map = new Map<string, number>();

  for (const row of grid) {
    const rowString = row.toString();
    const count = map.get(rowString);
    map.set(rowString, (count || 0) + 1);
  }

  const cols = (grid[0] || []).map((_, j) => grid.map((row) => row[j] || 0));

  let pairs = 0;

  for (const col of cols) {
    pairs += map.get(col.toString()) || 0;
  }

  return pairs;
}

// equalPairs([
//   [3, 2, 1],
//   [1, 7, 6],
//   [2, 7, 7],
// ]);
