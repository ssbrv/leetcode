function findDifference(nums1: number[], nums2: number[]): number[][] {
  const unique1 = new Set(nums1);
  const unique2 = new Set(nums2);

  nums2.forEach((n) => {
    if (unique1.delete(n)) unique2.delete(n);
  });

  return [Array.from(unique1), Array.from(unique2)];
}
