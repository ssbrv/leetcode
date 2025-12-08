class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function maxLevelSum(root: TreeNode): number {
  let max = -Infinity;
  let level = 1;
  let currentLevel = 1;
  const q = [root];

  while (q.length > 0) {
    const size = q.length;
    let sum = 0;
    for (let i = 0; i < size; i++) {
      const node = q.shift()!;
      sum += node.val;
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
    if (sum > max) {
      level = currentLevel;
      max = sum;
    }
    currentLevel++;
  }

  return level;
}
