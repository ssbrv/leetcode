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

function longestZigZag(root: TreeNode | null): number {
  if (root === null) return 0;

  let maxLen = 0;

  function dfs(node: TreeNode | null, isLeft: boolean, length: number) {
    if (node === null) return;

    if (length > maxLen) {
      maxLen = length;
    }

    dfs(node.left, true, isLeft ? 1 : length + 1);
    dfs(node.right, false, isLeft ? length + 1 : 1);
  }

  dfs(root.left, true, 1);
  dfs(root.right, false, 1);

  return maxLen;
}
