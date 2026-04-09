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
    if (!root) return false;
    if (!subRoot) return true;

    if (this.checkTree(root, subRoot)) return true;  // ✅ use result, call with this.

    return (this.isSubtree(root.left, subRoot) ||    // ✅ correct casing
            this.isSubtree(root.right, subRoot));
}

checkTree(node, subRoot) {
    if (!node && !subRoot) return true;   // ✅ both null, match
    if (!node || !subRoot) return false;  // ✅ one null, mismatch

    if (node.val !== subRoot.val) return false;

    return this.checkTree(node.left, subRoot.left) &&   // ✅ recurse both sides
           this.checkTree(node.right, subRoot.right);
}
}
