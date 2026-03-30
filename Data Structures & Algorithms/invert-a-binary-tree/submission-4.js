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
     * @return {TreeNode}
     */
    invertTree(root) {
        if(root === null)return null ; 
        let node = new TreeNode(root.val); // intiaivel new nodepassed inv alue

         node.right = this.invertTree(root.left);
         node.left = this.invertTree(root.right);

         return node
    }
}
