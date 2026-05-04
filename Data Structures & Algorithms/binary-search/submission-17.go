func search(nums []int, target int) int {

 l , r := 0, len(nums) - 1


for l <= r {
		fmt.Println(l,r)
	// m  := (r + l )/ 2
	m := l + (r - l ) / 2
	fmt.Println(nums[m])
	if target == nums[m] {
		return m
	}else if target > nums[m]{
		l = m + 1
	}else{
		r = m - 1
	}
	fmt.Println(l,r)
}


return -1
}
