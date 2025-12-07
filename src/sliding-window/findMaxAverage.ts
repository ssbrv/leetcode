function findMaxAverage(nums: number[], k: number): number {
  let currentSum = nums.slice(0, k).reduce((n, acc) => n + acc);
  let largestSum = currentSum;

  for (let i = k; i < nums.length; i++) {
    currentSum -= nums[i - k] || 0;
    currentSum += nums[i] || 0;

    if (currentSum > largestSum) {
      largestSum = currentSum;
    }
  }

  return largestSum / k;
}
