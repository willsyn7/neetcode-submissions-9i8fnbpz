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
        let curr = head ;
        let prev = null;
        while(curr){
            let temp = curr.next // delcare a temp vairalbe amd the reuslt to t
            // be the value fothe nex tnod
             curr.next = prev ; 
             prev = curr;
             curr = temp;
        }
        return prev
    }
}
