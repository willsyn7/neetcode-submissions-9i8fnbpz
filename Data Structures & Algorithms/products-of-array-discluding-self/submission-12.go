func productExceptSelf(nums []int) []int {
prefix := 1 
suffix := 1

res := make([]int,len(nums))

for i  :=  0; i < len(nums);i++ {
	res[i] = 1 
}



for i := 0  ; i < len(nums);i++ {

	res[i] *= res[i] * prefix
		prefix *= nums[i]
}

for i := len(nums) - 1 ; i >= 0 ; i--{
	res[i] = res[i] * suffix
	suffix *= nums[i]
	
}

return res



}
