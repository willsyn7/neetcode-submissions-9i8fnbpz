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
        const bal = this.dfs(root);
        if(bal[0] === 1)return true;
        else{
            return false 
        }
    }

        dfs(root){
         if(root === null ){
            return [1,0]
         }
        let left = this.dfs(root.left);
        let right = this.dfs(root.right);

         //checek for 3 codnitoisn, if the left is side of the ndoe is blanacd
         const balanced = left[0] === 1 && right[0] === 1 &&
        Math.abs(left[1] - right[1]) <= 1; 
         const height = 1 + Math.max(left[1],right[1]);
         if(balanced)return [1,height];
         else{
            return [0,height]
         }

         // 
        }
}
