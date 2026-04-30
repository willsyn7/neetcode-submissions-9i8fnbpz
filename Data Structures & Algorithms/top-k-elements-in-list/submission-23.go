func topKFrequent(nums []int, k int) []int {

var n = len(nums)
// Delcare bucekt, counta rray , res
var res [] int
count := make(map[int]int)
bucket := make([][]int, n +1 )


for _, ele := range(nums){
	// fmt.Println(ele)
	count[ele]++
}

for key, value := range count {
	bucket[value] = append(bucket[value], key)
}

for i := len(bucket) - 1 ; i >= 0 ; i-- {
	for _, ele := range bucket[i]{
		res = append(res, ele)
		if len(res) == k{
			return res
		}
	}
}

fmt.Println(bucket)
fmt.Println(count)
fmt.Println(n)

 


return res
}
