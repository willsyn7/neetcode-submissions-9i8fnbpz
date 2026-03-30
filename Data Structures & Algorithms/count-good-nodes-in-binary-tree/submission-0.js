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
    goodNodes(root) {
        return this.dfs(root,root.val)
    }
    dfs(node,max){
        if(!node)return 0 ;
        let res = 0 ; 
        if(node.val >= max){
            res = 1 ;
        } 
        if(node.left){
            res += this.dfs(node.left,Math.max(node.val,max))
        }if(node.right){
            res += this.dfs(node.right, Math.max(node.val,max))
        }
        return res

    }
}
