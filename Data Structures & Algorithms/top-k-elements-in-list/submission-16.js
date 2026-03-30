class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     * Problem : Return array containg
     * 1. Declare an empty new object caleld count,
     * 2. Declare a new arra that will store the elmement in the netsed arryadindexes
     * 3.Sotre the occurance as key and store the array elmeents as values
     * within an  array
     * 4.push the result into the nested array 
     * 5.Use a nested for loop to itterate thoguht hte array and return if res array 
     * is size k 
     * 
     */
    topKFrequent(nums, k) {
        let count = {};
        let countarr = Array.from({length: nums.length +1 }, () => []);
        let res = [];
        for(const ele of nums){
            count[ele] = (count[ele] || 0) + 1 ;
        }
        console.log(count)
        for(const key in count){
            console.log(key)
            countarr[count[key]].push(parseInt(key))
        }
        for(let e = countarr.length - 1; e > 0 ; e--){
            for(let ele of countarr[e]){
                res.push(ele);
                if(res.length === k )return res ; 
            }
        }
        
    }
}
