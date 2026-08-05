func hasDuplicate(nums []int) bool {

set := make(map[int]struct{})

for i:= 0 ; i < len(nums); i++{
    if _, exists := set[nums[i]]; exists{
        return true;
    }
    set[nums[i]] = struct{}{}

}
return false;
    
}
