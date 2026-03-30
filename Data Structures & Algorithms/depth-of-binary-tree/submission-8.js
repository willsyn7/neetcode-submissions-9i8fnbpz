/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 * 1. Declare an if conditon that chekcs if hte root value is null and reutnr 0 
 * 2. reutrn 1 + the the Greater value of reusivielcing calling donw the elft and right side 
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}

     */

    maxDepth(root) {
        if(root === null)return 0 ; 
        
    
        return 1 + Math.max(this.maxDepth(root.left),this.maxDepth(root.right))
    }
}
