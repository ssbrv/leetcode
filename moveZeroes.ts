function moveZeroes(nums: number[]): void {
  let write = 0;

  for (let read = 0; read < nums.length; read++) {
    if (nums[read] !== 0) {
      nums[write++] = nums[read]!;
    }
  }

  nums.fill(0, write, nums.length);
}

function testCompress(input: number[], output: number[]) {
  moveZeroes(input);

  console.assert(
    JSON.stringify(input) === JSON.stringify(output),
    `Expected "${output}", but got "${input}"`
  );
}

testCompress([0, 1, 0, 3, 12], [1, 3, 12, 0, 0]);
