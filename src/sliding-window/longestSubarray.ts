function longestSubarray(nums: number[]): number {
  let len = 0;
  let left = 0;
  let right = 0;
  let hasZero = false;

  for (; right < nums.length; right++) {
    if (nums[right] === 1) {
      continue;
    }

    if (!hasZero) {
      hasZero = true;
      continue;
    }

    const newLen = right - left - 1;
    if (newLen > len) {
      len = newLen;
    }

    while (nums[left++] === 1) {}
  }

  return Math.max(len, right - left - 1);
}
