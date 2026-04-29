func groupAnagrams(strs []string) [][]string {

Values := make(map[[26]int][]string)

for _, s:=  range strs{
values := [26]int{}
	for _, x:=  range s{
			values[x - 'a']++
	}
	Values[values] = append(Values[values], s)
	// at the index values on the Values hashmap append s which is the starting string
}

res := make([][]string, 0, len(Values))

for _, x := range Values {
    
        res = append(res, x)
    }

	return res
}
