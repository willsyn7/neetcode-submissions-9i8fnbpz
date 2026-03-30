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
    if(!root)return 0 ; 
    let lheight = this.dfs(root.left);
    let rheight = this.dfs(root.right);
    let dia = lheight + rheight;
    let sub = Math.max(this.diameterOfBinaryTree(root.left),this.diameterOfBinaryTree(root.right));
    return Math.max(dia,sub);
    }


    dfs(root){
        if(!root){
            return 0;
        }
        return 1 + Math.max(this.dfs(root.left),this.dfs(root.right))
    }

}
