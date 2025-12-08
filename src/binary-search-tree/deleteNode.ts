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

function deleteNode(node: TreeNode | null, key: number): TreeNode | null {
  if (node === null) return null;

  if (key < node.val) {
    node.left = deleteNode(node.left, key);
    return node;
  }

  if (key > node.val) {
    node.right = deleteNode(node.right, key);
    return node;
  }

  if (node.left === null) return node.right;
  if (node.right === null) return node.left;

  let successor = node.right;
  while (successor.left) {
    successor = successor.left;
  }

  node.val = successor.val;
  node.right = deleteNode(node.right, successor.val);
  return node;
}
