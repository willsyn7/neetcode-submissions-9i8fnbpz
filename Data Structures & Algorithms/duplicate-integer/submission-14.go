func hasDuplicate(nums []int) bool {

fmt.Println(len(nums))
// var test1 = 0
 mySet := make(map[int]bool);
for i:= 0; i < len(nums);i++ {

if mySet[nums[i]] {
	return true;
}
mySet[nums[i]] = true;
	
}
// fmt.Println(test1)

fmt.Println(mySet);
return false;
	// for i:0 ; i < len(nums)
    
}
