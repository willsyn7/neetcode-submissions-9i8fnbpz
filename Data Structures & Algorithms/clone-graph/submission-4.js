/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        let map = new Map();
        
        return this.dfs(node,map);
    }

    dfs(node,map){
        if(!node)return null;
        if(map.has(node)){
            return map.get(node)
        } 
        let copy = new Node(node.val );
        map.set(node,copy)

        for(let nei of node.neighbors){
            copy.neighbors.push(this.dfs(nei,map))
        }
        return copy

    }
}
