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
     * @return {boolean}
     */
    isBalanced(root) {
            const dfs = (node) => {
                if(!node)return 0;

                let l = dfs(node.left);
                let r = dfs(node.right);

                if(l === -1 || r === -1)return -1;
                if(Math.abs(r - l) > 1)return -1;
              
                
                return 1 + Math.max(l,r)
            }

            return dfs(root) !== - 1;
    }
}
