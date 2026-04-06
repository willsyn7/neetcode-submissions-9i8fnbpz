class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
         quickSort(nums, 0, nums.length - 1);
    return nums;
    }
}
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
const quickSort = (nums, low, high) => {
    if (low < high) {
        let pivotIdx = partition(nums, low, high);
        quickSort(nums, low, pivotIdx - 1);
        quickSort(nums, pivotIdx + 1, high);
    }
}

let partition = (nums, low, high) => {
    let pivot = nums[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (nums[j] <= pivot) {
            i++;
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
    }

    [nums[i + 1], nums[high]] = [nums[high], nums[i + 1]];
    return i + 1;
    }

