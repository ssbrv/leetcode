class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseListMy(head: ListNode | null): ListNode | null {
  if (!head) {
    return null;
  }

  let ptr = head;

  while (ptr.next) {
    let tmp = ptr.next;
    ptr.next = tmp.next;
    tmp.next = head;
    head = tmp;
  }

  return head;
}

function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let curr = head;

  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}
