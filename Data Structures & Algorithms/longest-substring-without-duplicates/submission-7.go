func lengthOfLongestSubstring(s string) int {
	set := make(map[string]bool)
	var l = 0
	var res = 0
	for r := 0 ; r < len(s); r++{
		for set[string(s[r])] {
            delete(set, string(s[l]))
            l++
        }
		set[string(s[r])] = true

		res = max(res, r-l+1)
	}
	
	return res
}
