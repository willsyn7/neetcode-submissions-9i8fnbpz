func topKFrequent(nums []int, k int) []int {

var n = len(nums)

count := make(map[int]int)

var res [] int
bucket := make([][] int, n + 1)

for i := range nums{
	fmt.Println(nums[i])
	count[nums[i]]++
}

for key, value := range count{
	bucket[value] = append(bucket[value], key)
}

for i := len(bucket) - 1; i >= 0 ; i--{
	for _, integer := range bucket[i] {
			res = append(res, integer)
		if len(res) == k {
		return res
		}
	
	}
}

fmt.Println(count)
fmt.Println(n)
fmt.Println(bucket)
return res

}
