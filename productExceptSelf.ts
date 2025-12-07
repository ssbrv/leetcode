function productExceptSelf(nums: number[]): number[] {
  const product = nums.reduce((n, acc) => n * acc, 1);
  return nums.map((n) => product / n);
}
