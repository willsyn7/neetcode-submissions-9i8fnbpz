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
     * @param {TreeNode
     * } root
     * @return {number}
     * 1. Decalre a cosntant variabled called resposne and asising to an array with a signle value of 0 
     * 2. call the height dfs fucniton pasisng in root and global res viraibled
     * 3. return the first index of the res obj
     * 4.Declare a heihgt mehtod with root nad res as aparmneter
     * 5. if the root is null reutrn 0 ; 
     * 6.delcare left and right vriaiblees that iwll reuieiviivlly call down repeositive sides
     * 7. reassign the value of the res array
     * Return 1 added to the heihgt of the left and rith subtree
     */
    diameterOfBinaryTree(root) {
        const res = [0];
        this.height(root,res)
        return res[0]
    }

    height(root,res){
        if(!root)return 0;

        let l = this.height(root.left,res);
        let r = this.height(root.right,res);
        res[0] = Math.max(res[0],l + r);
        return 1 + Math.max(l, r)

    }


}
