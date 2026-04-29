func groupAnagrams(strs []string) [][]string {
    // 1. Map key must be the fixed array [26]int, not a slice []int
    // Arrays in Go are comparable, so they can be keys!
    groups := make(map[[26]int][]string)

    for _, s := range strs {
        count := [26]int{} // Fixed size array
        
        for _, char := range s {
            // Subtract 'a' from the rune to get 0-25 index
            count[char-'a']++
        }
        
        // 2. Append the string to the slice at that key
        // We don't use .push(), we use append() and re-assign
        groups[count] = append(groups[count], s)
    }

    // 3. Extract the values into a 2D slice
    res := make([][]string, 0, len(groups))
    for _, val := range groups {
        res = append(res, val)
    }
    
    return res
}