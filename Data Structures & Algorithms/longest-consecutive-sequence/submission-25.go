func longestConsecutive(nums []int) int {

res := 0
set := make(map[int]bool)

for _,value := range(nums){
	set[value] = true
}
for _,value := range(nums){
	if !set[value -1]{
		 l  := 1;
		for set[value + l ]{
			l++
		}
		if res < l {
			res = l
		}
	}
}

return res
}
