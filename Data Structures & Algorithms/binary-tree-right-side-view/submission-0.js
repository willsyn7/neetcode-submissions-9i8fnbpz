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
     * @return {number[]}
     */
    rightSideView(root) {
    const output = this.dfs([],root,0);
    return output
    }
    dfs(array,root,level){
        if(root === null){
            return array;
        }
        if(level === array.length){
        array.push(root.val);
        }
        let right = this.dfs(array,root.right,level + 1);
        let left = this.dfs(array,root.left,level + 1);
        return array;
    }
}
