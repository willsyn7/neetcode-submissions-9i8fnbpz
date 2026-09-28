func topKFrequent(nums []int, k int) []int {
length := len(nums)
freq := make(map[int]int)
elements := make([][]int, length + 1)
res := make([]int,0)


for _,value := range(nums){
	freq[value] = freq[value] + 1
}

fmt.Println(freq)

for key,value := range freq {
	elements[value] = append(elements[value], key)
}

for  i := len(elements) - 1; i >= 0 ; i--{
	for x := len(elements[i]) - 1; x >= 0  ; x--{
	if(len(res) == k){
		return res
	}
		res = append(res, elements[i][x])
	}
}
fmt.Println(elements)
return res


}
