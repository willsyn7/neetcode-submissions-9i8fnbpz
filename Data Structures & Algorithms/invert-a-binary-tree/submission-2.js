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
     * @return {TreeNode}
     * //1. Declar ea brekaign conditon where
     * if the current ndoe is null return null
     * //2. Intiializle a new tree with the root node being  itnaizlied
     * to root.val
     * 3. Assign the left ndoe by assignng to the evaluted value fo the rivht node bieng 
     * called reuieievley
     * 4. Assign the riht nodeby assignit it ot the velauted reuslt of 
     * rescuiveevly calling the left node 
     * 5.Return node
     */
    invertTree(root) {
        if(root === null)return null;
        const node  = new TreeNode(root.val);

 node.right = this.invertTree(root.left);
    node.left = this.invertTree(root.right);
   

    return node;
    }
}
