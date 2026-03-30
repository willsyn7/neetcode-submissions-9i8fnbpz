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
        let previous = null;
        let current = head; 
        let next = null; // next is a temp var that is used to to store the the value of the next
        // pointer

        while(current) {
         next = current.next;
         current.next = previous

        previous = current; 
        current = next; 
        
          
        }
        return previous

    }
}
