/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */

func reverseList(head *ListNode) *ListNode {

curr := head
var prev *ListNode

for curr != nil{

	var temp = curr.Next
	curr.Next = prev
	prev = curr
	curr = temp
}
    return prev
}
