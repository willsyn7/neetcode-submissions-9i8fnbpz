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
     * @param {number} k
     * @return {number}
     * .input root node of the binary searh ctree, k is target elment
     * Streaghety, traveraes have an array to store the global vairiable k and idnex 0 
     * after
     *
     */
    kthSmallest(root, k) {
        const temp = new Int32Array(2);
        temp[0] = k;
        this.dfs(root,temp)
        return temp[1];

    }
    dfs(node,temp){
        if(!node)return;
        this.dfs(node.left,temp);
        temp[0] -=1;
        if(temp[0] === 0){
            temp[1] = node.val;
            return temp[1];
        }
        this.dfs(node.right,temp)

    }
}
