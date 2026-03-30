class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     * 1.  Declar ea 
     */
    twoSum(numbers, target) {
        let l = 0 ;
        let r = numbers.length - 1;
        let res = []
        while(l <= r ){
        let sum = numbers[l] + numbers[r];
        if(target > sum) l += 1 ;
        else if (target <sum) r -= 1;
        else{
                return [l +1, r +1]
                }

        }
    }

}
