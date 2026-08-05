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
    let starts = intervals.map((x)=> x.start).sort((a,b) => a -b );
    let end = intervals.map((x) => x.end).sort((a,b) => a - b);

    // console.log(starts);
    // console.log(end);
    let curr = 0;
    let rooms = 0;
    let sp = 0 ; 
    let ep  = 0 ;
    
    while(sp < starts.length){
    
    if(starts[sp] < end[ep]){
        sp++;
        curr++;
    }else {
        ep++;
        curr--;
    }
    rooms = Math.max(rooms,curr);
    }
    return rooms;
}

}
