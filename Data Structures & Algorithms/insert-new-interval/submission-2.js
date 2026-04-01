class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        const res = [];
        let i = 0    
         while(i < intervals.length && intervals[i][1] < newInterval[0]){
            res.push(intervals[i]);
            i++;
         }
        //higher is already  > newINterveal[0]
        //3 >= 1
        //whle new i inteivela lower is less then new inteivelal uppper
                //while the new introuced interveal overlaps by useing hte uppernew tirleal
         while(i < intervals.length && intervals[i][0] <= newInterval[1]){
     newInterval = [Math.min(intervals[i][0], newInterval[0]), Math.max(intervals[i][1], newInterval[1])];
            i++;
         }
         res.push(newInterval);

         while(i < intervals.length){
            res.push(intervals[i]);
            i++;
         }

         return res;
    }
}
