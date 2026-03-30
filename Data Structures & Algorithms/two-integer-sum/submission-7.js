class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
     twoSum(array, goal) {
       let indexes = [];

    for(let i = 0; i < array.length; i++){
       for(let j = i + 1; j < array.length; j++){
          if (array[i] + array[j] === goal) {
        indexes.push(i);
        indexes.push(j);
        return indexes
          }
       }
    }
    return false 
     }
 
}
