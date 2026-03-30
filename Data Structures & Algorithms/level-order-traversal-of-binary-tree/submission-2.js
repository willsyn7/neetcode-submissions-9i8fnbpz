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
     * @return {number[][]}
     */
    levelOrder(root) {
        let res = [];
        if (!root) return res;

        const q = [];  // Use an array as a queue
        q.push(root);

        while (q.length > 0) {
            let level = [];
            let size = q.length; // Track the number of nodes in the current level

            for (let i = 0; i < size; i++) {
                let node = q.shift(); // Dequeue from the front
                level.push(node.val);

                // Only enqueue non-null children
                if (node.left) q.push(node.left);
                if (node.right) q.push(node.right);
            }

            res.push(level);
        }
        return res;
    }
}
