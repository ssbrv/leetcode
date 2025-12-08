/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function deleteMiddleSlow(head: ListNode | null): ListNode | null {
  if (head === null) return null;

  let size = 0;
  let ptr: ListNode | null = head;

  while (ptr !== null) {
    size++;
    ptr = ptr.next;
  }

  if (size === 1) {
    return null;
  }

  ptr = head;
  let prev: ListNode;
  let target = (size / 2) | 0;

  while (target-- !== 0) {
    prev = ptr;
    ptr = ptr.next;
  }

  prev.next = ptr?.next;
  return head;
}

function deleteMiddle(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return null;

  let slow: ListNode | null = head;
  let fast: ListNode | null = head;
  let prev: ListNode | null = null;

  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  prev!.next = slow!.next;
  return head;
}
