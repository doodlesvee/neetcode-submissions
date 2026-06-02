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
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        let pSlow = head,
    pFast = head,
    prev = null;

  while (pFast) {
    prev = pSlow;
    pSlow = pSlow?.next;
    pFast = pFast.next?.next;
  }

  prev.next = null;

  let current = pSlow;
  let t = null;

  while (current) {
    let temp = current.next;
    current.next = t;

    t = current;
    current = temp;
  }

  let p1 = head,
    p2 = t;
  while (p1 && p2) {
    let temp = p1.next,
      temp2 = p2.next;

    p1.next = p2;
    p2.next = temp;

    p1 = temp;
    p2 = temp2;
  }

  return head;
    }
}
