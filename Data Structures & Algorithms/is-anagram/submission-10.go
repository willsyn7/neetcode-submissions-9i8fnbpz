import "slices"

func isAnagram(s string, t string) bool {
if(len(s) != len(t)){
	return false
}

sArray := make([]int , 26)
tArray 	:= make([]int , 26)

for i := 0 ; i < len(s);i++{
// indexS := 
// indexT := 
sArray[s[i] - 'a']++
tArray[t[i] -  'a']++
}

return slices.Equal(sArray, tArray)
}
