class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    minRemoveToMakeValid(s) {
        let stack = [];
        let count = 0 ;
        for(let str of s ){
            if(str === "("){
                stack.push(str);
                count++;
            }else if(str === ")" && count > 0 ){
                stack.push(str);
                count--;
            }else if(str !== ")")stack.push(str);
        }
    console.log(stack);
    console.log(count)
    let res = [];
         for (let i = stack.length - 1; i >= 0; i--) {
        console.log(stack[i])
        if(stack[i] === '(' && count > 0){
            count--;
        }else{
            res.push(stack[i])
        }
    }
    
   
    return res.reverse().join('')
    }
}

