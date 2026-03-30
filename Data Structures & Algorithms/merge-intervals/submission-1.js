class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a,b)=> a[0] - b[0]);
        let output = [];
        output.push(intervals[0]);
        for(let interval of intervals){
            let start = interval[0];
            let end = interval[1];
            let outputend = output[output.length -1][1]
            
            if(start<=outputend){
                output[output.length -1][1] = Math.max(outputend,end);
            }else{
                output.push([start,end]);
            }
        }
        return output
    }
}
