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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        const newNode = new ListNode();

    newNode.next = head;
    let slowPointer = newNode,
        fastPointer = newNode,
        idx = 0,
        prev = null;

    while (fastPointer) {
        if (idx < n) {
            fastPointer = fastPointer.next;
            idx++;
        } else {
            prev = slowPointer;
            slowPointer = slowPointer.next;
            fastPointer = fastPointer.next;
        }
    }

    prev.next = slowPointer.next;
    return newNode.next;
    }
}
