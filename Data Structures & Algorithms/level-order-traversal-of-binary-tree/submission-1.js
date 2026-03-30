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

        const q = []; // Using an array to simulate a queue
        q.push(root);

        while (q.length > 0) {
            let level = [];
            let size = q.length;

            for (let i = 0; i < size; i++) {
                let node = q.shift(); // Dequeue the first element
                if (node !== null) {
                    level.push(node.val);
                    if (node.left) q.push(node.left); // Enqueue left child
                    if (node.right) q.push(node.right); // Enqueue right child
                }
            }

            if (level.length > 0) {
                res.push(level);
            }
        }

        return res;
    }
}