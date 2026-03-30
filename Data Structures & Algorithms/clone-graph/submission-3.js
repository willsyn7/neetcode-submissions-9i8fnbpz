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
     * 1.Stregety : Use dfs to reuireiviely naviatigie through, populate a hashmap 
     * with the visiteid node values, use those nodes already on the map to reutnr 
     *the value of the node onto the clonde tree 

     1. Delcare a fucntoinc aleld clone grpah, accpeitng node as aprmanter
     2. Delcare a new isntance of a map 
     3. Pass the map and the current ndoe as paramtners into the dfs cuntion


     */
    cloneGraph(node) {
        let map = new Map();
        return this.dfs(node,map);
    }

    dfs(node,map){
        if(!node)return null ; 
        if(map.has(node))return map.get(node);

        let copy = new Node(node.val);
        map.set(node,copy);
        for(let n of node.neighbors){
            copy.neighbors.push(this.dfs(n,map))
        }
        return copy
    }
}
