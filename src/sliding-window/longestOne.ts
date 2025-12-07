function longestOnes(nums: number[], k: number): number {
  let zeroes = 0,
    left = 0,
    len = 0,
    right = 0;

  for (; right < nums.length; right++) {
    if (nums[right] === 1) {
      continue;
    }

    if (zeroes < k) {
      zeroes++;
      continue;
    }

    const newLen = right - left;
    if (newLen > len) {
      len = newLen;
    }

    while (nums[left++] === 1) {}
  }

  return Math.max(len, right - left);
}
