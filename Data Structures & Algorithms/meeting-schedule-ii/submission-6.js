/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        let start = intervals.map((a) => a.start).sort((a,b ) => a - b);
        let end = intervals.map((b) => b.end).sort((a,b) => a- b);
        let rooms = 0 , curr = 0;
        let l = 0 , r = 0;

        while(l < intervals.length){
            if(start[l] < end[r]){
                curr++
                l++;
            }else{
                curr--;
                r++;
            }
            rooms = Math.max(curr,rooms)
        }
        return rooms
    }
}
