func isAnagram(s string, t string) bool {
if len(s) != len(t){ return false}
sMap := make(map[string]int)
tMap := make(map[string]int)


for i:= 0 ; i < len(s); i++{
sMap[string(s[i])]++
tMap[string(t[i])]++

}

for key, value := range sMap {
	// fmt.Println(key)
	// fmt.Println(value)
	// fmt.Print
	if( value != tMap[key]){
		return false
	}
}

fmt.Println(sMap)
fmt.Println(tMap)

return true
}
