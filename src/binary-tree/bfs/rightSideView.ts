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

function rightSideView(root: TreeNode | null): number[] {
  if (root === null) return [];

  const result: number[] = [];
  const queue: TreeNode[] = [root];

  while (queue.length) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const node = queue.shift()!;

      if (i === 0) result.push(node.val);

      if (node.right) queue.push(node.right);
      if (node.left) queue.push(node.left);
    }
  }

  return result;
}
