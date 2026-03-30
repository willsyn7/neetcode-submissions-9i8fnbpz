/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 * 1. Delcae an ifciond that hceckes if the root., p or q alvalues ar emisisng
 * 2. Declare an ifncodin thhat hceceks if the greater of the p or vall is less then the
 * root val
 * 3. If so reuieivclcly call down the left
 * 4. declare an else if cstamernt that recureiviecly calls down the left sides if the smalle
 * of the two avlues is less then the root value
 * 5. else reutnr root
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
       lowestCommonAncestor(root, p, q) {
        if(!root || !p || !q)return null; 
        
        if(Math.max(p.val,q.val) < root.val){
            return this.lowestCommonAncestor(root.left,p,q)
        }else if(Math.min(p.val,q.val)>root.val){
              return this.lowestCommonAncestor(root.right,p,q)
        }
        return root
     
    }
}
