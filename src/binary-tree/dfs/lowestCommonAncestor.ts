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

function lowestCommonAncestorReadable(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (root === null) return null;

  function dfs(node: TreeNode | null): TreeNode | null {
    if (node === null) return null;

    if (node === p || node === q) return node;

    const left = dfs(node.left);
    const right = dfs(node.right);

    if (left && right) return node;

    return left ?? right;
  }

  return dfs(root);
}

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (root === null) {
    return null;
  }

  let ancestor: TreeNode = root;

  function dfs(node: TreeNode | null): number {
    if (node === null) {
      return 0;
    }

    let count = 0;

    if (node === p) {
      count++;
    }

    if (node === q) {
      count++;
    }

    if (count === 2) {
      ancestor = node;
      return 2;
    }

    const left = dfs(node.left);

    if (left === 1 && count === 1) {
      ancestor = node;
      return 2;
    }

    if (left + count === 2) {
      return 2;
    }

    const right = dfs(node.right);

    if (left === 1 && right === 1) {
      ancestor = node;
      return 2;
    }

    if (left + right === 1 && count === 1) {
      ancestor = node;
      return 2;
    }

    return left + right + count;
  }

  const count = dfs(root.left);
  if (count !== 2) dfs(root.right);

  return ancestor;
}
