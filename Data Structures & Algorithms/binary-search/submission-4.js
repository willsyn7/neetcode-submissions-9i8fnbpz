class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        //declare left poitner and set it to the value of 0 
        //delcare right pointer and set it to the last index  .length -1 
        //Delcare a while loop to move the pointers as long as the left pointer is less
        //then the right pointer it will keep on running hte for loop
        // Decalre a midlde poitner that will be used to compare the value of hte traget
        // add l to the muidpoint to ensure that when its graeater then a 32 bit interger 
        // it ownt get a stack error
        //declare an if statmetn that will check that will check if the the value of nums
        // at the m index is grater then the traget
        // if so reassing the index to the psiiton of mimid - - 1
        //declare na  an ifs tmaent that will check if hte vlaue of nums is the n
        // else return index of m 
        // reutrn -1 if while loop is exitied

        let l = 0; 
        let r  = nums.length - 1;
        while(l <= r ){
            let m = l + Math.floor((r- l)/2);
        console.log(m)
         if(nums[m]>target){
            r = m - 1;}
        else if(nums[m] < target){
             l = m + 1 
        }else{
            return m
        }
         }
         return -1
        }

    }

