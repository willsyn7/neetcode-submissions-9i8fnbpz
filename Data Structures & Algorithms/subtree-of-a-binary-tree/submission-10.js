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
    // If subroot is null, it is considered a subtree by definition
    if (!subroot) return true;
    // If root is null but subroot is not, subroot cannot be a subtree
    if (!root) return false;

    // Check if the current root matches subroot or if subroot is a subtree of root's left or right subtree
    if (this.dfs(root, subroot)) {
        return true;
    }
    return this.isSubtree(root.left, subroot) || this.isSubtree(root.right, subroot);
}
    dfs(root,subroot){
        if(!root && !subroot)return true;
        //    if(!root || !subroot)return false;
        if(root && subroot && root.val === subroot.val){
            return(
                this.dfs(root.left,subroot.left) && 
                this.dfs(root.right,subroot.right)
            );
        } 
        return false;

    }
}
