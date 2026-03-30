class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     * 1.Intiaizle an instannce of a new heap but sort by useign the firis temelmeent
     * in thea rugmenet arraray 
     * 2. Use a for loop to itterat thorugh the ar array and ennumerate the ehap
     * 3. by desturuubing the 1st and seocnd values and ^ with each other
     * enumeratte the result in the heap, [ distannce, x, y]
     * 4.return the evaulteud result of the deuqueu method but with only x_y valuees
     * 
     */
    kClosest(points, k) {
        const heap = new MinPriorityQueue(point =>point[0]);

        for(const[x,y] of points){
            const distance = x **2 +  y ** 2  ; 
            heap.push([distance,x,y])
        }
        const res = [];
        for(let z = 0; z < k ; z++){
            const[_, x, y] = heap.pop();
            res.push([x,y])
        }
        return res 


    }
}
