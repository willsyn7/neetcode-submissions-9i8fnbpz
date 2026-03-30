class Solution {
   
    topKFrequent(nums, k) {
    const obj = {} ;
    const output = []
    const array = Array.from({length:nums.length + 1} ,() => []);
//    console.log(array)
   for(const n of nums){
    obj[n] = (obj[n]|| 0 ) + 1 ;
   }
//    console.log(obj)
   for(const key in obj){
    array[obj[key]].push(parseInt(key))
   }
//    console.log(array)
   for(let i  = array.length - 1 ; i > 0 ;i--){
    // console.log(`asdfasdf`)
    for(const ele of array[i] ){
        // console.log(`adfasdf`)
           output.push(ele)
        if(output.length === k)return output;
        // console.log(ele, `<-ele`)
     
        // console.log(output<`-output`)
    }
   }
//    console.log(array)

}
}
