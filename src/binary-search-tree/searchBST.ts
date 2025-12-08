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

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  function search(node: TreeNode | null): TreeNode | null {
    if (node === null) return null;
    if (val === node.val) return node;
    if (val < node.val) return search(node.left);
    return search(node.right);
  }

  return search(root);
}
