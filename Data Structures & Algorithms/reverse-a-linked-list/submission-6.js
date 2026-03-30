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
     * 1. Intaiizle a new temp onde and asisign it to null
     * 2. Itnaizkle a curr node and asiisgn it ot eh head node
     * 3. ITniizla a next node and assign ito the the neext node
     * 4.
     */
    reverseList(head) {
        let curr = head
        let prev  = null;
        while(curr){
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp
        }
         return prev

    }
}
