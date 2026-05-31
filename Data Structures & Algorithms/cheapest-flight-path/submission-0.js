class Solution {
    /**
     * @param {number} n
     * @param {number[][]} flights
     * @param {number} src
     * @param {number} dst
     * @param {number} k
     * @return {number}
     */
    findCheapestPrice(n, flights, src, dst, k) {
        let list = new Map();
    for (let [from, to, price] of flights) {
        if (!list.has(from)) list.set(from, []);
        list.get(from).push([to, price]);
    }
    
    let res = Infinity;
    let visited = new Set(); // Added to prevent infinite loops

    const dfs = (curr, total, stops) => {
        // 1. Fix: check if we've reached destination first, using 'total'
        if (curr === dst) {
            res = Math.min(res, total);
            return;
        }
        
        // 2. Fix: 'stops' is counting down, so check if it drops below 0
        // Also keep your excellent pruning: total >= res
        if (stops < 0 || total >= res) return;
        
        // 3. Fix: default to [] if node has no outgoing flights
        let neighbors = list.get(curr) || [];
        
        for (let [to, cost] of neighbors) {
            if (!visited.has(to)) {
                visited.add(to);
                dfs(to, total + cost, stops - 1);
                visited.delete(to); // Backtrack
            }
        }   
    };

    visited.add(src);
    dfs(src, 0, k);

    // 4. Fix: Return -1 if no path was found
    return res === Infinity ? -1 : res;

    }
}
