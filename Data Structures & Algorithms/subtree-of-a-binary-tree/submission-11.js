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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subroot) {
    if(!root) return false;
    if(!subroot) return true ;
    if(this.dfs(root,subroot) )return true ; 
   return (
    this.isSubtree(root.left, subroot) ||
    this.isSubtree(root.right, subroot)
   );
 
}
  dfs(root,subroot){
    if(!root && !subroot)return true;
    if(root && subroot && root.val === subroot.val){
        return(
              this.dfs(root.left, subroot.left) &&
                this.dfs(root.right, subroot.right)
        );
    }
    return false 
    }
}
