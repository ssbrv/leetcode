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

function getLeafs(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }

  if (!root.left && !root.right) {
    return [root.val];
  }

  return [...getLeafs(root.left), ...getLeafs(root.right)];
}

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
  const leafs1 = getLeafs(root1);
  const leafs2 = getLeafs(root2);

  return JSON.stringify(leafs1) === JSON.stringify(leafs2);
}
