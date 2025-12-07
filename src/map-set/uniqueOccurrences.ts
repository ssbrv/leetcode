function uniqueOccurrences(arr: number[]): boolean {
  const map = new Map<number, number>();

  for (const n of arr) {
    const count = map.get(n);
    map.set(n, (count || 0) + 1);
  }

  const set = new Set(map.values());

  return set.size === map.size;
}
