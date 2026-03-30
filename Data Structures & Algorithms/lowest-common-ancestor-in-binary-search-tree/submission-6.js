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
     * 1.Declare an if coidniotn that chekcs if args are misisng 
     * 2.Decalre an if condion that checeks if the greater of the p and q arugemtns
     * is less then the root
     * if so resivieiclly call down th eleft side
     * 3. Haave an else if statment for reiveivilcy calling down the right sidee
     * 4. Else return root 
     */
    lowestCommonAncestor(root, p, q) {
        if(!root || !p || !q)return null ; 

        if(Math.max(p.val,q.val)<root.val){
           return this.lowestCommonAncestor(root.left, p, q)
        }else if(Math.min(p.val,q.val)>root.val){
             return this.lowestCommonAncestor(root.right, p, q)
        }
        return root
    }

}
