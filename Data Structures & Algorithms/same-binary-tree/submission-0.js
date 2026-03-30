/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     * Declare an if if codniotn that checeks if value p and q are the same
     * if they are not the same return true
     * this is for the edge case where no nodes are being passed in 
     * Declare an if condino that hceckes if the vlaue of p and q are passed in 
     * and if the value of p.value is euqal to q .valeu 
     * if it is
     */
      isSameTree(p, q) {
        if (!p && !q) {
            return true;
        }
        if (p && q && p.val === q.val) {
            return (
                this.isSameTree(p.left, q.left) &&
                this.isSameTree(p.right, q.right)
            );
        } else {
            return false;
        }
    }
}

