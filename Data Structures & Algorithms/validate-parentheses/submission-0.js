class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
   //Declare a cosnt stack viaible and asisign it to an empty array
   // Declare  a const map and assigin it to an object with the key 
   // as the closeing bracket and the value as the bienging bracket
   //use a for in loop to tittreate thoguht the arugemtn string
   //itttereat hrough teh sarugemtn array s useing a for 
   // declare an if soitaumetn that checks if the stack   -1 = the value 
   //pop it off stack 
   // else reutnr fals 
   const stack = [];
        const map = {
            '}': '{',
            ']': '[',
            ')': '(',
        };

        for (const char of s) {
            const isBracket = char in map;
            if (!isBracket) {
                stack.push(char);
                continue;
            }

            const isEqual = stack[stack.length - 1] === map[char];
            if (isEqual) {
                stack.pop();
                continue;
            }

            return false;
        }

        return stack.length === 0;
    }
}