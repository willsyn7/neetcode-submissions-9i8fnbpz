func productExceptSelf(nums []int) []int {
 prefix := 1
 n := len(nums)
res := make([]int, n)

fmt.Println(res)
for i := range res{
	res[i] = 1
} 

for i := 0 ; i < n ; i++{
	res[i] = res[i] * prefix
	prefix *= nums[i]
}

 postFix := 1
for i := n -1 ; i >= 0 ; i-- {
	res[i] = res[i] * postFix
	postFix *= nums[i]
}

return res
}
