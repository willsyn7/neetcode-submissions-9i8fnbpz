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
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root) {
          if (!root) return 0;
        let l = this.findHeight(root.left);
        let r =  this.findHeight(root.right)
        let diamter = l + r; 
        let sub =  Math.max(this.diameterOfBinaryTree(root.left), 
                           this.diameterOfBinaryTree(root.right));
                           return Math.max( diamter, sub)
    }
        findHeight(root){
        if(!root)return 0;
        return 1 + Math.max(this.findHeight(root.right),this.findHeight(root.left))
    }
}
