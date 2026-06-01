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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
         let p1 = list1,
      p2 = list2;

    let head = new ListNode(),
      current = head;

    while (p1 && p2) {
      if (p1.val < p2.val) {
        current.next = p1;
        current = current.next;

        p1 = p1.next;
      } else {
        current.next = p2;
        current = current.next;

        p2 = p2.next;
      }
    }

    current.next = p1 || p2
    return head.next;
    }
}
