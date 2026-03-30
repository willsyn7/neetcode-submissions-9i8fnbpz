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
        if(!subRoot)return true;
        if(!root)return false ; 
        if(this.bts(root,subRoot))return true; 
        return (
            this.isSubtree(root.left,subRoot)|| //is an or symobl beucase it needs 
            // to cehcek which side the left or right tree
            this.isSubtree(root.right,subRoot)
        )
    }
    bts(root,subRoot){
        if(!root & !subRoot)return true; // a missing subroot is euqal to a missing tree 
        if(root && subRoot && root.val === subRoot.val){
            return(
                this.bts(root.left,subRoot.left) && 
                this.bts(root.right,subRoot.right)
            )
            
        }
        return false 

        
        }
}
