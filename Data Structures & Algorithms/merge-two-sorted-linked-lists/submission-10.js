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
     * 1. Declare a merge list method and pass in two lists as apramtners
     * 2. Declare a dummy var
     * 3. Declare and assigni ndoe ot the dummy node 
     * 4. Delcare an while conditional that will run as long as list1 and list 2 exisits
     *5. Declare an if statmemtn that will checke if the left node is grater
     b) if so point the node poitner to the node on the firs tlist1
     move the current poitner on list1 to the nex tnode 
     6else  assign the pointer on the 2nd lsit 
     mvoe teh poitner on  the second list 
     Reassin the current poitner on node to the the next potier 
     Declare an ifs tmatent taht cehceks if the node 1 
     Declare an i f stmaent that will check if list1 exisits 
     if so reassign the pointer to list1 
     else reassing hte ptioner for list2 
     */
    mergeTwoLists(list1, list2) {
        let dummy = {val : 0  , next : null}
        let node = dummy ; 
        while(list1 && list2){
            if(list1.val<list2.val){
                node.next = list1;
                list1 = list1.next
            }else{
                node.next = list2;
                list2 = list2.next
                           }
            node = node.next
        }

        if(list1)node.next = list1;
        else{
            node.next = list2
        }
        return dummy.next


    }
}
