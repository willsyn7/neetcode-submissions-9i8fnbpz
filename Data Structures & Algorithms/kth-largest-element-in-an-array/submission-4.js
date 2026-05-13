class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        if(!nums.length)return ;

      let piviot = nums[Math.floor(Math.random() * nums.length)];

        let left = nums.filter((x ) => x > piviot );
        let mid = nums.filter((x) => x === piviot);
        let right = nums.filter((x) => x < piviot);

        let M = mid.length, L = left.length;

        if(L >= k ){
            return this.findKthLargest(left,k)
        }else if (k  > L + M){
            return this.findKthLargest(right, k - L - M )
        }else{
            return mid[0]
        }
    }
}
