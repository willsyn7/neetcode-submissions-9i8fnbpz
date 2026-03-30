class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let prev = strs[0];
let curr = 0 ; 
let ind = prev.length;

let res = 0 ;

for(let i = 1 ; i < strs.length; i++){
    while(prev !== strs[i].substring(0,ind)){
        ind--;
        console.log(prev)
        if(ind < 0)return ""; 
        prev = prev.substring(0,ind);
   
    }   
}
return prev;
    }
}
