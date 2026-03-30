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
    if(!root) return 0 ; 
        let l = this.height(root.left);
        let r = this.height(root.right);
        let d = l + r ;
        let sub = Math.max(this.diameterOfBinaryTree(root.left),this.diameterOfBinaryTree(root.right))

        return Math.max(sub,d)

    }
    height(root){
        if(!root)return 0 ;
        return 1 + Math.max(this.height(root.left),this.height(root.right));


    }
}
