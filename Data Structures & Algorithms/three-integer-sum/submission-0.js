class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    ///intput : ana aryra of intergers
    //otutput: nested array of posisible combatointns, use  a 3 poitner souiton
    //streyty. sort the intput arrya
    //1. Declare var sorted and assign to nums.sort
    //2. Set Pointer A to the value of 0 
    //3. Set Pointer B to the value of 1
    //4. Set Pionter C to the value of sorrted array-1
    //5. Declare  whielc odniotn that will run till the value of b> C
    //6. Delcacel var total sum ;
    //7. Declare an if codntoin that checks if the sum is > 0 ; Decrment value of c 
    // 8. If the value of sum < 0 ; Incmrent B 
    //9. Else, push all values into outptu arrya
    //10. return otuptu array


 

    threeSum(nums) {
        nums.sort((a, b) => a - b);
        const res = [];

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > 0) break;
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            let l = i + 1;
            let r = nums.length - 1;
            while (l < r) {
                const sum = nums[i] + nums[l] + nums[r];
                if (sum > 0) {
                    r--;
                } else if (sum < 0) {
                    l++;
                } else {
                    res.push([nums[i], nums[l], nums[r]]);
                    l++;
                    r--;
                    while (l < r && nums[l] === nums[l - 1]) {
                        l++;
                    }
                }
            }
        }
        return res;
    }
}
