class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     * 1. Declare a new iantnanc eof ar pariity queueu
     * 2. Delceare a  perperpoty and assign it tot teha rug value at k 
     * 3.Use a for  loop to ittrate htorugh the whole ar arrya 
     * 4. After looping thorugh duequeu etill the zie fo the heap is equal to k 
     * 5. inqueue on the miniheap instance
     * 6. Decla rea method called add val 
     * 7 .call the enqeuue emthod 
     * 8 .Declar ean if stmatment aht thckesks if the length of heap is equal to k 
     * 9 . return fornt 
     * 

     */
    constructor(k, nums) {
        this.minheap = new MinPriorityQueue();
        this.k = k 
        for(const n of nums ){
            this.minheap.enqueue(n);
        }
        while(this.minheap.size()> k )this.minheap.dequeue();
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.minheap.enqueue(val);
        if(this.minheap.size() > this.k )this.minheap.dequeue();
        return this.minheap.front();
    }
}
