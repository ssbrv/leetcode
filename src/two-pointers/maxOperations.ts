function maxOperations(nums: number[], k: number): number {
  const map = new Map<number, number>();
  let operations = 0;
  for (const num of nums) {
    if (num >= k) {
      continue;
    }

    const count = map.get(k - num);
    if (!count) {
      map.set(num, (map.get(num) || 0) + 1);
      continue;
    }

    map.set(k - num, count - 1);
    operations++;
  }
  return operations;
}
