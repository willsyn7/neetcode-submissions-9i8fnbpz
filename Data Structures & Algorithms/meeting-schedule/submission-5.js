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
     * @returns {boolean}
     */
  canAttendMeetings(intervals) {
    if(intervals.length === 0 )return true;
  intervals.sort((a, b) => a.start - b.start); // ✅ use .start
    let prevEnd = intervals[0].end;               // ✅ use .end
    for (let i = 1; i < intervals.length; i++) {
        if (prevEnd > intervals[i].start) {       // ✅ use .start
            return false;
        }
        prevEnd = Math.max(intervals[i].end, prevEnd); // ✅ use .end
    }
    return true;
}
  }
