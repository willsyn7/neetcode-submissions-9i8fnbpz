class Solution {
    topKFrequent(nums, k) {
       const obj = {};
    const array = Array.from({ length: nums.length + 1 }, () => []);

    // Count frequency of each number
    for (const n of nums) {
        obj[n] = (obj[n] || 0) + 1;
    }

    // Bucket sort based on frequency
    for (const key in obj) {
        array[obj[key]].push(parseInt(key));
    }

    const res = [];

    // Collect top k frequent elements
    for (let i = array.length - 1; i > 0; i--) {
        for (let y = 0; y < array[i].length; y++) {
            res.push(array[i][y]);
            if (res.length === k) return res;
        }
    }

    return res;

    }
}
