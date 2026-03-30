class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    //strrategey: use a two opointer soultion
    twoSum(numbers, target) {
    //1. Declare Pointer l = 0, ;  Pointer r = numbers.length -1
    //2. Use a while loop to ittrate till poitner l is greatrer 
         // Decalre a sum variable and asising to the vlaue of numbers[l] + number[r]
    //3. Declare an if stmaent that checks if ssum is equal to target
    // 4. Delcare an if statmetn that hcekcs if the sum > target
        //Decmerent poitner r 
    //5.Declare an if stmanet that cehcsk if sum < target
        // Icnrment the value of l 
    //6. return r +1  and l +   as an array
    let l = 0 , r = numbers.length -1 ;
    while( l < r){
    let sum = numbers[l] + numbers[r];
    if(sum> target)r -=1;
    else if(sum<target)l +=1 ;
        else{
            return [l +1,r + 1]

    }
    }



    }
}
