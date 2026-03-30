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
        const check = this.dfs(root);// shoudl return an array 
        if(check[0] === 1)return true;
        return false 
    }
    dfs(root){
     if(!root){
        return [1,0];
     }
     const left = this.dfs(root.left);
     const right = this.dfs(root.right);
     //write boolean stamtent that checeks if the left and right nodes
     // are balancced
     const balanced =
     left[0] === 1 && right [0] && 
      Math.abs(left[1]- right[1])<= 1;
      const heights = 1 + Math.max(left[1], right[1]);

      if(balanced){
        return [1,heights]
      }else{
        return[ 0, heights]
      }
    }


}
