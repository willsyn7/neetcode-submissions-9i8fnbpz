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
     * //1. Store the evualtued reuslt of apassing root into df sufnciotn
     * Since the touptu will be an array, cehcek if the index 1 psitions is equal
     * to the value of 1
     * if it is reutnr true else tree is ucanlbed
     */
    isBalanced(root) {
        const bal = this.dfs(root);
    if(bal[0] === 1){
        return true
    }return false
    }

    dfs(root){
    if(!root){
        return [1,0];
    }
    let left = this.dfs(root.left);
    let right = this.dfs(root.right);
    const bal = left[0] === 1 && right[0] === 1 &&
    Math.abs(left[1] - right[1]) <= 1 ;
    const height = 1 + Math.max(left[1],right[1]);
    if(bal){
        return [1,height]
    }else{
        return [0,height]
    }




    }
}
