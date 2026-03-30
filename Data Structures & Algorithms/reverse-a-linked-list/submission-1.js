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
     * 1. declar e a head node 
     * 2. Delcare a temp that will hold the cvalue previeous node 
     * 3. Reassign the ponters
     * 
     */
    reverseList(head) {
        let [prev,curr,next] = [null,head,null];
        while(curr){
            next = curr.next;
            curr.next = prev;
            
            prev = curr;
            curr = next
        }
        return prev;
    }
}
