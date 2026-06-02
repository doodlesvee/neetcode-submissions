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
     * @return {boolean}
     */
    hasCycle(head) {
        let tracker = new Set();
        let current = head;

        while (current) {
            if (tracker.has(current)) {
                return true;
            } else {
                tracker.add(current);
                current = current.next;
            }
        }

        return false;
    }
}
