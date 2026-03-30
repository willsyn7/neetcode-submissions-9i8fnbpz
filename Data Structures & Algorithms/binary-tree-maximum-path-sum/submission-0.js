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
    maxPathSum(root) {
        let res = [root.val];
         this.dfs(root,res);
        return res[0];
    };
    dfs(root,res) {
        if(root === null)return 0;
        let lmax = Math.max(this.dfs(root.left,res),0);
        let rmax = Math.max(this.dfs(root.right,res),0);
        res[0] = Math.max(res[0],root.val + lmax + rmax) ;
        return root.val + Math.max(lmax,rmax) 


        
    }
}
