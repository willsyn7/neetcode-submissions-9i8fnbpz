class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const matches = {
            ")" : "(",
            "]" : "[",
            "}" : "{"
        }
        for(let br of s){
            if(Object.values(matches).includes(br)){
                stack.push(br);
            }else{
                if(stack.length === 0 )return false;
                let open = stack.pop();
                if(matches[br] !== open)return false
            }
        }
        return stack.length === 0;
    }
}
