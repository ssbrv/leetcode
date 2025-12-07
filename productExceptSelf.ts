function productExceptSelfNaive(nums: number[]): number[] {
  const prefixes = Array(nums.length);
  prefixes[0] = 1;
  const suffixes = Array(nums.length);
  suffixes[nums.length - 1] = 1;

  for (let i = 1; i < nums.length; i++) {
    prefixes[i] = prefixes[i - 1] * nums[i - 1]!;
  }

  for (let i = nums.length - 2; i >= 0; i--) {
    suffixes[i] = suffixes[i + 1] * nums[i + 1]!;
  }

  const result = Array<number>(nums.length);

  for (let i = 0; i < nums.length; i++) {
    result[i] = prefixes[i] * suffixes[i];
  }

  return result;
}

function productExceptSelf(nums: number[]): number[] {
  const result = new Array(nums.length).fill(1);

  let prefix = 1;
  let suffix = 1;

  for (let i = 0; i < nums.length; i++) {
    result[i] *= prefix;
    prefix *= nums[i]!; // '!' may slow down
    result[nums.length - 1 - i] *= suffix;
    suffix *= nums[nums.length - 1 - i]!; // '!' may slow down
  }

  return result;
}
