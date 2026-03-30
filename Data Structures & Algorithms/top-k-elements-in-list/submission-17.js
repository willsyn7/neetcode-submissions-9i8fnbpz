class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     * 1. Declare maps and nested arrya 
     * 2. Declare a loop to popuppualte the boejct
     * 3. Declare a nested array that will push in the eneubmer at those fepsieic frueqrencines
     * 4. Since we re tyring to figure otu the top most we will then ittersat ethofuhg
     * the numbers fstarting from the end of the nested array adn reurn the ntested array 
     * if array is of length k
     */
    topKFrequent(nums, k) {
        let freq = {};
        let array = Array.from({length : nums.length  +1 }, () => []);
        let output = []

        for(let n of nums){
            freq[n] = (freq[n] || 0) + 1;
        }

        for(let n in freq){
            array[freq[n]].push(parseInt(n))
        }

        for(let i = array.length - 1; i > 0 ; i--){
            for(const n of array[i]){
                output.push(n);
                if(output.length === k){
                    return output
                }

            }
        }


    }
}
