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
        let curr = head ; 
        let next = curr.next;
        let set1 = new Set();
        while(curr !== null){
        if(set1.has(curr))return true;
            set1.add(curr)
            // console.log(next.val)
            // console.log(set1)
            curr = curr.next ;
            
        }
        return false
    }
}
