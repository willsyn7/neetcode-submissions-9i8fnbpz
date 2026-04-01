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
        let start = intervals.map((a) => a.start).sort((a,b) => a - b);
        let end = intervals.map((a) => a.end).sort((a,b) => a - b);
        
        //solvign subproblem what is the max number of rooms needed
        let rooms = 0 ; 
        let curr = 0 ;

        let s = 0 ; 
        let e = 0;

        //[0,5,16]
        //[10,20,40]

         while(s < intervals.length){
            if(start[s] < end[e]){
                curr++;
                s++;
            }else{
                curr--
                e++;
            }
            rooms = Math.max(curr,rooms);
         }
             return rooms
    }

}
