/**
 * Definition of Interval:
 * class Interval  {
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
    minMeetingRooms(intervals: Interval[]): number {
    let s = intervals.map((a) => a.start).sort((a,b) => a - b);
    let e = intervals.map((a) => a.end).sort((a,b) => a - b);

    // console.log(s);
    // console.log(e);
    let currRooms = 0;
    let sp = 0, ep = 0;
    let maxRooms = 0;
    
    while( sp < s.length){
    if(s[sp] < e[ep]){
        currRooms++;
        sp++;
    }else{
        currRooms--
        ep++;
    }
    maxRooms = Math.max(currRooms,maxRooms);

    }


    return maxRooms;
    }
}
