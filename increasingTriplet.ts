function increasingTriplet(nums: number[]): boolean {
  let small: number = Infinity;
  let bigger: number = Infinity;
  for (let i: number = 0; i < nums.length; i++) {
    if (nums[i] <= small) {
      small = nums[i];
      continue;
    }

    if (nums[i] > bigger) {
      return true;
    }

    bigger = nums[i];
  }
  return false;
}
