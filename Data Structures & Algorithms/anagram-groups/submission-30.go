func groupAnagrams(strs []string) [][]string {
	
	hashMap := make(map[[26]int][]string)

	for _, str := range strs{
		
		var count [26]int
		for _,s := range str{
			count[s - 'a']++
		}

		hashMap[count] = append(hashMap[count], str)

	} 

	res := make([][]string, 0, len(hashMap))

	for _, x:= range hashMap {
		res = append(res,x)
	}

return res
}
