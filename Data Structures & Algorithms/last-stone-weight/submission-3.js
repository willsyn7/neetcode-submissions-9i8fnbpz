class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const max = new MaxPriorityQueue();
        for(const s of stones){
            max.enqueue(s);
        }
        while(max.size() >1 ){
           const x = max.dequeue();
            const y = max.dequeue();

            if(x !== y ){
                max.enqueue(x - y )
            }


        }
        if(max.size() === 1)return max.front();
        else{
            return 0 
        }

    }
}
