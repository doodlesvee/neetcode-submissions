/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */

    addTwoNumbers(l1, l2) {
       let p1 = l1;
  let p2 = l2;
  let carry = 0;

  const dummy = new ListNode(0);
  let tail = dummy;

  while (p1 || p2 || carry) {
    const x = p1 ? p1.val : 0;
    const y = p2 ? p2.val : 0;
    const sum = x + y + carry;

    carry = Math.floor(sum / 10);
    tail.next = new ListNode(sum % 10);
    tail = tail.next;

    if (p1) p1 = p1.next;
    if (p2) p2 = p2.next;
  }

  return dummy.next;
    }
}
