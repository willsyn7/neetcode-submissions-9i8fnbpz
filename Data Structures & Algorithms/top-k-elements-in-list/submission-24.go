func topKFrequent(nums []int, k int) []int {
	
count := make(map[int]int)
bucket := make([][] int , len(nums) + 1)
var res []int


for _,value := range nums{
	count[value]++
}

for key, value := range count{
	bucket[value] = append(bucket[value], key)
}

for i := len(bucket) - 1 ; i >= 0 ;i--{
	for x := len(bucket[i]) - 1; x >= 0 ; x--{
		res = append(res, bucket[i][x])
		if(len(res) == k ){
			return res
		}
	}
}



fmt.Println(count)
fmt.Println(bucket)

return res

}
