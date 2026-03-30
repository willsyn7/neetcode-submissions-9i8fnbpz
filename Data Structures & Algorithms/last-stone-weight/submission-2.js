class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     * 1. Delcare a while stamtent that will run as long as 
     * the length of stnes is greather then 1 
     * 2. Sort the arg arra in ascnding order
     * 3. Delcare a new var called current taht sugtracts
     * pop with pop for the last 2 elmeents of the arara
     * 4. if curr exists push it back into the ary arra
     * 5. Outsidde of the while loop return the last ememnt of stones

     */
    lastStoneWeight(stones) {
        while(stones.length > 1){
            stones.sort((a,b)=>a-b);
            let curr  = stones.pop() - stones.pop();
            if(curr)stones.push(curr);
        }
        if (stones.length > 0) {
    return stones[0];
} else {
    return 0;
}
    }
}
