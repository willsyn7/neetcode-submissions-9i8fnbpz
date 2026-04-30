func lengthOfLongestSubstring(s string) int {
	set := make(map[byte]bool)
	var l = 0
	var res = 0
	for r := 0 ; r < len(s); r++{
		for set[s[r]] {
            delete(set, s[l])
            l++
        }
		set[s[r]] = true

		res = max(res, r-l+1)
	}
	
	return res
}
