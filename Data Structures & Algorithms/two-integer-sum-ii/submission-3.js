class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        //stgttey : use 2 piotners on aready sorted array, move poitner from length and idnex 0 
        // till it reaches target arugemtn
        //1. use a for loop to ittreate through the argumetn arrya
        // 2. delcare a constant sum aviraible, that is be assigned the value of adding poitner a and poitnerb 
        //  Ponter A = inde x0 
        //Pointer B = index, argarray.lenght - 1
        //3. Delcare a while loop that will decrmrenet pointer b till the sum iss more then the arget arg
        //4. Declare a while loop that will incmrent pointer A while hte sum is less then the target arg
        //5. return an array wiht indexs -1 
            let a = 0
            let b = numbers.length-1
      while(a<b){
            let sum = numbers[a] + numbers[b]
            if(sum>target) b-=1;
            else if(sum<target)a+=1;
            else{
            return [a+1,b+1]
            }
           
        

    }
 return []
}
}
