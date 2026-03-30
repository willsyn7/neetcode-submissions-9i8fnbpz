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
     * 
     */
    isBalanced(root) {
        let bal = this.dfs(root)
        if(bal[0] === 1){
            return true;
        }else{
            return false 
        }
    }
    dfs(root){
        if(!root){
            return [1,0]
        }
        const left = this.dfs(root.left);
        const right = this.dfs(root.right);
        // checek if left and right index are equal to the value of 0 
        //cehcek if the diffrence between the left and right is <=1 
        // Decalare a height varaible and caclaulted the highet
        //
        //ceh
        const balanced = left[0] === 1 && right[0] === 1 && 
        Math.abs(left[1] - right[1]) <= 1;
        const height = 1 + Math.max(left[1], right[1]);
        if(balanced){
            return [1,height]
        }else{
            return [0,height]
        }
    }
}
