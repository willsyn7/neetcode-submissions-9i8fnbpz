func hasDuplicate(nums []int) bool {
    
    set := make(map[int]bool)
    for  _,value := range nums{
        if set[value] == true{
            return true
        }
        set[value] = true
    }
    return false
    
}
