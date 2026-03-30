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
        const dummy = new ListNode();
    let cur = dummy;
    let carry = 0;

    while (l1 !== null || l2 !== null || carry !== 0) {
        let v1 = 0;
        let v2 = 0;

        if (l1 !== null) {
            v1 = l1.val;
        }
        if (l2 !== null) {
            v2 = l2.val;
        }

        let val = v1 + v2 + carry;
        carry = Math.floor(val / 10);
        val = val % 10;

        cur.next = new ListNode(val);
        cur = cur.next;

        if (l1 !== null) {
            l1 = l1.next;
        }
        if (l2 !== null) {
            l2 = l2.next;
        }
    }

    return dummy.next;
}
}