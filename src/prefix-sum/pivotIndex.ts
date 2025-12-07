function pivotIndex(nums: number[]): number {
  const sum = nums.reduce((n, acc) => n + acc);
  let left = 0;

  for (let i = 0; i < nums.length; i++) {
    if (left === sum - nums[i] - left) {
      return i;
    }

    left += nums[i];
  }

  return -1;
}
