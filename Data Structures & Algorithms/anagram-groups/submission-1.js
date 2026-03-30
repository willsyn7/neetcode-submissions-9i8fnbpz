class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    //stgetecy : sort every element in the arg array and then store each variabition as
    // akey value pair
    //create an empty objet called obj
    // create a for loop to ittreat ehtough the arg array
    // declare an if ccodniotn that checks if the current value exists as key in the boj
    // if it does not create key value pair
    // push the value at the index of the arugment array
    //return new array 

    groupAnagrams(strs) {
        const obj = {};
    for(let i = 0; i < strs.length;i++){
     const sorted = strs[i].split('').sort().join('');
     console.log(obj)
     if(!obj[sorted]) obj[sorted] = [];
     obj[sorted].push(strs[i])
    }
        return Object.values(obj)



    }
}
