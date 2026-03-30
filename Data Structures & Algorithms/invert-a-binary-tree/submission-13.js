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
     * 1. Declare an if conition to check if the node exists, if not return null 
     * for returning reuvieiivu fcnitons
     * 2. Intaiizle a new node at the head node 
     * 3. Assiigin the value of the left node to the reuvieivvelly evaluted result of
     * passing the right node into fucniton
     * 4. Do the same for right node 
     * 5. return root 
     */
    invertTree(root) {
        if(root == null  )return null ; 
        let node = new TreeNode(root.val);

        node.left = this.invertTree(root.right);
        node.right = this.invertTree(root.left);

        return node
    }
}
