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
     */
    invertTree(root: TreeNode | null): TreeNode {
    if(!root)return root;
        const q = [root];
        
        while(q.length){
            let l = q.length;
            for(let i = 0 ; i < l ;i++){
                let node = q.shift();
                [node.left, node.right] = [node.right,node.left];
                if(node.left)q.push(node.left);
                if(node.right)q.push(node.right);
         
            }
        }
        return root;
    }
}
