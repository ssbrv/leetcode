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

function pathSumNaive(root: TreeNode | null, targetSum: number): number {
  if (!root) {
    return 0;
  }

  return (
    dfsNaive(root, targetSum) +
    pathSumNaive(root.left, targetSum) +
    pathSumNaive(root.right, targetSum)
  );
}

function dfsNaive(node: TreeNode | null, target: number): number {
  if (!node) return 0;

  const hit = node.val === target ? 1 : 0;

  return (
    hit +
    dfsNaive(node.left, target - node.val) +
    dfsNaive(node.right, target - node.val)
  );
}

function pathSum(root: TreeNode | null, targetSum: number): number {
  const prefix = new Map<number, number>();
  prefix.set(0, 1);

  function dfs(node: TreeNode | null, curr: number): number {
    if (!node) return 0;

    curr += node.val;

    let count = prefix.get(curr - targetSum) || 0;

    prefix.set(curr, (prefix.get(curr) || 0) + 1);

    count += dfs(node.left, curr);
    count += dfs(node.right, curr);

    prefix.set(curr, (prefix.get(curr) || 0) - 1);

    return count;
  }

  return dfs(root, 0);
}
