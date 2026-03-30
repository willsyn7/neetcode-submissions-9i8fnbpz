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
    isSubtree(root, subRoot) {
        if(!root)return false; // if root is misisng reutrn false
        if(!subRoot)return true; // if subroot is missintg return true 
        if(this.sameTree(root,subRoot))return true;// 
          return (
            this.isSubtree(root.left, subRoot) ||
            this.isSubtree(root.right, subRoot)
        );
    }
    sameTree(root,subroot){
        if(!root && !subroot)return true ; 
        if(root && subroot && root.val === subroot.val){
            return(
                this.sameTree(root.left,subroot.left) &&
                this.sameTree(root.right,subroot.right)
            );
            
        }
        return false 

    }
}
