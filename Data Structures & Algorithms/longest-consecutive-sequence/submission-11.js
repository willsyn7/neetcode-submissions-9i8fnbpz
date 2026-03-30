class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
    let set1 = new Set(nums);
    let maxLength = 0;

    for (let num of set1) {
        // Check if num is the start of a sequence
        if (!set1.has(num - 1)) {
            let currNum = num;
            let currLength = 1;

            while (set1.has(currNum + 1)) {
                currNum += 1;
                currLength += 1;
            }

            maxLength = Math.max(maxLength, currLength);
        }
    }
    
    return maxLength;
}
}