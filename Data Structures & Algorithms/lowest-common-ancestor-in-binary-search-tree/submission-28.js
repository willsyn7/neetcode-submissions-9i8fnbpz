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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     * 
     *Stregety : Ienidnfy where the split for the p and q ndoees for the binrary  
     tree whiel travieiring by takeing the greater of lesser of the 2 nodes 
     and seeing if both are less then or equal to the root, if ocndion is false it memans 
     one of them is greater then or less then, thus idnfienfying the split 
     1. Delcare an if condion that will reutnr null if root, p or q are msising
     2. Declarele an if ocdnion and sue Math.max to to see if the greater node
     is less then the root
     if so reui3ievly call down the left isd e
     3. Delcare an ficdnon that hceks if Math.min(p, q ) is grater then root ndoe
     b)if so return the reueiivly evuatled result of traveiiing thge left side
     4) return root
      
     */
    lowestCommonAncestor(root,p,q){
        if(!root || !p || !q)return null ;

        if(Math.max(p.val,q.val)< root.val){
            return this.lowestCommonAncestor(root.left,p,q)
        }
        else if (Math.min(p.val,q.val)> root.val){
            return this.lowestCommonAncestor(root.right,p,q)
        }
        else{
            return root
    }
}
}
