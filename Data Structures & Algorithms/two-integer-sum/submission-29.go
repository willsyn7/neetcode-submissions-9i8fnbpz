func twoSum(nums []int, target int) []int {
map1 := make(map[int]int)

for i:= 0 ; i < len(nums);i++ {
	diff := target - nums[i]
	_, exists := map1[diff]
	if exists{
		res := []int{map1[diff], i }
		return res
	}
	map1[nums[i]] = i
}

return []int{-1,-1}

}
