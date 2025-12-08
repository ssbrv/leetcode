class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function pairSumSlow(head: ListNode): number {
  let slow = head;
  let fast = head.next;
  const stack: number[] = [];

  while (fast) {
    stack.push(slow.val);
    slow = slow.next;
    fast = fast.next ? fast.next.next : null;
  }

  let sum = -Infinity;

  while (slow) {
    const newSum = slow.val + (stack.pop() || 0);
    if (newSum > sum) {
      sum = newSum;
    }

    slow = slow.next;
  }

  return sum;
}

function pairSum(head: ListNode): number {
  let slow: ListNode = head.next;
  let slowPrev: ListNode = head;
  let fast: ListNode | null = head.next.next;

  while (fast) {
    const next = slow.next;
    slow.next = slowPrev;
    slowPrev = slow;
    slow = next;
    fast = fast.next.next;
  }

  let sum = -Infinity;
  while (slow && slowPrev) {
    const newSum = slow.val + slowPrev.val;
    if (newSum > sum) {
      sum = newSum;
    }
    slow = slow.next;
    slowPrev = slowPrev.next;
  }

  return sum;
}
