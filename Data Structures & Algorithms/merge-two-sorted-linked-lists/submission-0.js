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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     * 1. Dcelare  a dummy NOde
     * Declarle and assign the vriable node to dummy 
     * Declare a while loop that ittreate throught list1 and lsit2 
     * 3. Declare an if doncdiootn htat cheks if val at list 1 is less sthen list 2 
     * if the val at list 1 is less then the val at list 2 
     * Have the enxt pointer on hte node be that node in lis t
     * then reasisign list 1 to the next elmeent 
     * 4. or eles it would be 
     * that the val of list 2 is greater then the value of list1
     * 5. thus thus the node that will be added will have to be from list2
     * after assigining the next node to list 2 on the otutpup
     * move the list 2 pointer to the next node
     * 6. Declare an if ocdniont that chceeks if list1 still exists outside o fht ellooo
     * 7. if so oopulate the remaininting node iwth list 1 else popualte list 2 
     * 8 reutnr dummy linked list 
     * 
     *The next node will be list1 
     if list1 
     * 
     */
    mergeTwoLists(list1, list2) {
        const output = {val: 0 , next : null};//declared dummy array
        let node = output ; //delcareing and aissign ndoe to toutpu t
        while(list1 && list2){
            if (list1.val < list2.val) {
                node.next  = list1;
                list1 = list1.next;
            }
            else{
                node.next = list2;
                list2 = list2.next;
            }
            node = node.next

        }
        if(list1)node.next = list1;
        else{
            node.next = list2;
        }
        return output.next

    }
}
