class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a,b)=> a[0] - b[0]);
        let prev = intervals[0];
        const res = [];

        for(let i = 1 ; i < intervals.length;i++){
            if(intervals[i][0] <= prev[1]){
                prev[1] = Math.max(intervals[i][1], prev[1]);
            }else{
                res.push(prev);
                prev = intervals[i]
            }
        }
        res.push(prev);

        return res;
    }
}
