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
        let current1 = l1;
        let current2 = l2;
        let carry = 0;
        let list = null;
        let newListCurr = null;

        while (current1 || current2 || carry) {
            const val1 = current1 ? current1.val : 0;
            const val2 = current2 ? current2.val : 0;

            const total = val1 + val2 + carry;

            carry = Math.floor(total / 10);
            const node = new ListNode(total % 10);

            if (list) newListCurr.next = node;
            else list = node;

            newListCurr = node;

            current1 = current1 ? current1.next : null;
            current2 = current2 ? current2.next : null;
        }

        return list;
    }
}
