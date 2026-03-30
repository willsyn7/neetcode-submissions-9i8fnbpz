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
        let dia = 0 ; 
        const dfs = (root) => {
            if(!root)return 0 ;
            let l = dfs(root.left);
            let r = dfs(root.right);
             dia = Math.max(dia, l + r);
             return 1 + Math.max(l,r)
        }
        dfs(root);
        return dia; 

        



    }
}
