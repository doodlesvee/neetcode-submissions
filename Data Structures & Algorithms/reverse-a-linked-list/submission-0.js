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
     * @return {ListNode}
     */
    reverseList(head) {
    let temp = head;
    let l = null;
    let length = 0;
    
    while (temp) {
      const node = new ListNode(temp.val);
      if (length) {
        node.next = l;
      }
      l = node;

      temp = temp.next;

      length++;
    }

    return l
    }
}
