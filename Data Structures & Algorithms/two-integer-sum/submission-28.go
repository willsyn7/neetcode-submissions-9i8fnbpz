func twoSum(nums []int, target int) []int {

hashMap := make(map[int]int)

for i:= 0 ; i < len(nums);i++{
		var diff = target - int(nums[i])
		fmt.Println(diff)

	if key, value := hashMap[diff]; value{
		return []int{key,i}
	}
		
		hashMap[int(nums[i])] = i
}
return nil

    
}
