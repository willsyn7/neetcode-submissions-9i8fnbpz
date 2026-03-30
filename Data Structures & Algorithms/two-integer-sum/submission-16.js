class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     * //inptut  an array
     * //output arryw ith the idnex
     * 1 Declare a var caleld table 1 and aiissign to the an enw new obj 
     * 2 use a for loop ot ittreate htorugh the arg arrya nums
     * 3. dellcar ea iddfrenince vreablae and aissign it tot the vlaue of 
     * the target - the index vlaue 
     * 4. Delcare anotehr vlaue calleed index and assign it to the value of useing th get keyword
     * on the map object, pass in 
     * id
     */
    twoSum(nums, target) {
    const map1 = new Map();
    for(let i = 0 ; i < nums.length ; i++){
        let diff = target -  nums[i]  ;
        let index = map1.get(diff);

        if(map1.has(diff))return [index,i];
        map1.set(nums[i],i)

    }
    return []
    }
}
