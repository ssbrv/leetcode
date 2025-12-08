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

function goodNodes(root: TreeNode): number {
  return _goodNodes(root, root.val);
}

function _goodNodes(node: TreeNode | null, max: number): number {
  if (!node) {
    return 0;
  }

  let goodNodes = 0;
  if (node.val >= max) {
    goodNodes += 1;
    max = node.val;
  }

  return _goodNodes(node.left, max) + _goodNodes(node.right, max) + goodNodes;
}
